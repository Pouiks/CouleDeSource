const {Category} = require('../models/');

const categoryController = {
    categoryPage: async (req, res) => {
        
        try{
        const category = await Category.findAll();
        res.render('category',{category});
        }catch(error){
            console.trace(error);
            res.status(500).send(error);
        }
    },

    productByCategory: async (request, response)=> {
        try{
            const categoryID = parseInt(request.params.id);
            const products = await Category.findByPk(categoryID,{
                include: "products"
            });
            console.log(products);
            response.render('productListByCategory',{
                products
            })
        } catch(error){
            console.trace(error);
            res.status(500).send(error);
        }
    }
};

module.exports = categoryController;