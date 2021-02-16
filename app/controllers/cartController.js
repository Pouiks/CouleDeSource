const { Product } = require("../models");

const cartController = {

    // méthode pour afficher le panier
    cartPage: async (request, response) => {
      const cart = request.session.cart || [];

      // calcul des prix totaux
      // pour calculer le sous-total "prix hors taxe", on va faire le tour du panier (une boucle quoi), et ajouter à chq fois "prix * quantité" au sous-total
      let subTotal = 0;
      let fdp = 0;

      if(cart.length > 0){
        fdp = 9.99;
      }
      
      for (const article of cart) {
        subTotal += article.price_ht * article.quantity;
      }
  
      // calcul de la TVA
      let tva = subTotal * 0.2;
  
      // total TTC avec frais de port
      let total = subTotal + tva + 9.99;
  
      response.render('panier', {
        cart,
        subTotal,
        tva,
        total,
        fdp
      });
     
  
    },

    // méthode pour ajouter un article au panier
  addToCart: async (request, response, next) => {
    try{
        // on stocke l'id de l'artcile' à rajouter
        const targetId = parseInt(request.params.id);

        // Si le panier n'existe pas, il faut le créer !
        if (!request.session.cart) {
        request.session.cart = [];
        }

        const product = await Product.findOne({
            where:{
                id: targetId
            }
        });

        let existingArticle = request.session.cart.find( element => {
            return element.id === targetId;
        });

        if (!existingArticle) {
            // L'article n'est pas dans la panier => on la rajoute
            // avant d'ajouter l'article au panier, on lui "accroche" une nouvelle propriété, qui représente la quantité voulue
            product.quantity = 1;
            
            request.session.cart.push( product );
          } else {
            // l'article est déjà dans le panier => on a plus qu'à incrémenter sa quantité
            existingArticle.quantity++;
          }

        response.redirect('/cart')
      } catch(error){
          console.trace(error);
          response.status(500).send(error);
      }

    },

    deleteToCart: async (request, response, next)=> {
      try{
        const targetId = parseInt(request.params.id, 10);
        if (!request.session.cart) {
          request.session.cart = [];
        }
        const product = await Product.findOne({
          where:{
              id: targetId
          }
      });

        // On cherche l'article dans le panier
        let existingArticle = request.session.cart.find( (product) => {
          return product.id === targetId;
      });
        // TEST SI PAS DE FIGURINE => 401
        if(!existingArticle){
          next();
        }else {
          //On decremente l'article
          existingArticle.quantity--;
          // Apres avoir décrémenté, on verifie si la valeur n'est pas égale a 0
          if(existingArticle.quantity <= 0){
            request.session.cart = request.session.cart.filter( (product) => {
              return product !== existingArticle;
            });
            if (request.session.cart.length === 0) {
              delete request.session.cart; // suppréssion du panier
            }
          }
        }
        response.redirect('/cart');
      }catch(error){
        console.error(error);
        response.status(500).send(error);
      }
    } 
  };
  
  
  module.exports = cartController;