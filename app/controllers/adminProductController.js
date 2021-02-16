const {Product,Category} = require('../models/');

const adminProductController = {
productAdmin: async (request, response) => {
    try{
        const productOnLoad = await Product.findAll();
        const categoryOnLoad = await Category.findAll();
        response.render('adminProduct',  {
            productOnLoad, 
            categoryOnLoad
        });
    }catch(error){
        console.trace(error);
        response.status(500).send(error);
    }
    
},


addOneProduct: async(request, response)=> {
    try{

        const productToAdd = await Product.findOne({
            where: {
                name: request.body.name
            }
            
        });
        
        if(productToAdd){
            response.render('adminProduct', {
                error:'Un produit du meme nom existe déjà ! ',
                fields: request.body
            });
        }else{
            await Product.create({
                name: request.body.name,
                description: request.body.description,
                price_ht: parseInt(request.body.price_ht),
                category: parseInt(request.body.selectedCategory),
                price_no_rebate: parseInt(request.body.price_no_rebate),
                brand: request.body.brand,
                quantity: parseInt(request.body.quantity),
                product_reference: request.body.product_reference,
                ean: parseInt(request.body.ean),
                color: request.body.color,
                matter: request.body.matter,
                size: request.body.size
                
            })

        }
        
    }catch(error){
        console.trace(error);
        response.status(500).send(error);
    }
    },

    selectOneProduct: async (request, response) => {
        try {
            const productSelectedFind = await Product.findAll();
            let targetRef = parseInt(request.body.productList);
            const selectedProduct = await Product.findOne({
                where: {
                    product_reference: targetRef
                }
            });
    
            if(!product) {
                response.render('adminProduct', {
                    error: 'Aucun produit trouvé en base',
                });
            } else {
                //console.log(user);
                response.render('adminProduct', {
                    selectedProduct,
                    productSelectedFind,
                    msg: 'produit trouvé !'
                });
            }
        } catch(error) {
            console.log(error);
            response.status(500).send(error);
        }
    },

    updateProduct: async(request, response) => {
        try{  
            
            const productReference = request.body.product_reference;
            const selectedProduct = await Product.findOne({
                where:{
                    product_reference: productReference
                }
            });
            //console.log(selectedUser);
    
            if(selectedProduct) {      
    
                selectedProduct.name = request.body.name;
                selectedProduct.description = request.body.description;
                selectedProduct.price_ht = request.body.price_ht;
                selectedProduct.price_no_rebate = request.body.price_no_rebate;
                selectedProduct.brand = request.body.brand;
                selectedProduct.quantity = request.body.quantity;
                selectedProduct.product_reference = request.body.product_reference;
                selectedProduct.ean = request.body.ean;
                selectedProduct.color = request.body.color;
                selectedProduct.matter = request.body.matter;
                selectedProduct.size = request.body.size;
                selectedProduct.size_unit = request.body.size_unit;
                selectedProduct.weight = request.body.weight;
                selectedProduct.weight_unit = request.body.weight_unit;
    
                await selectedProduct.save();
    
                const user = await User.findAll();
    
                response.render('adminUser', {
                    user,
                    msg: 'Utilisateur mis à jour'
                });
            } else {
                response.render('adminUser', {
                    msg: 'La mise à jour n\'a pas pu se faire'
                });
            }
        }catch(error){
            console.trace(error);
            response.status(500).render(error);
        }
    },

    deleteOneProduct: async(request, response) => {
        try{  
            const productReference = parseInt(request.body.deleteProduct);
            console.log(productReference);
            const deletedProduct = await Product.findOne({
            where:{
                product_reference: productReference
            }
            
        });
            
            await deletedProduct.destroy();
            const product = await Product.findAll();
            response.render('adminProduct', {
                product,
                msg: 'Produit supprimé'
            });
        }catch(error){
            console.trace(error);
            response.status(500).render(error);
        }
        } 
}
module.exports = adminProductController;