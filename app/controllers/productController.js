const {Product,Category} = require('../models/');

const productController = {
    productPage: async (request, response)=> {
        const productID = request.params.id; 
        const product = await Product.findOne({
            where:{
                id:request.params.id
            }
        });
        response.render('product', {
            productID,
            product
        });
    },

    


}
module.exports = productController;