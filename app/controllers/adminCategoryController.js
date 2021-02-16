const {Category} = require('../models/');

const adminCategoryController = {
    category: async(request, response) => {
        try{
            const category = await Category.findAll();
            response.render('adminCategory', {category});
        }catch(error){
            console.trace(error);
            response.status(500).send(error);
        }
    },

    addCategory: async (request, response)=> {
        try{
            const category = await Category.findOne({
            where:{
                name : request.body.name
            }
            });
        // Si la catégorie existe déja, on envois une erreur
            if(category){
                response.render('adminCategory', {
                    error: "La catégorie existe déjà !",
                    fields: request.body
            });
            }else{
                await Category.create({
                    name: request.body.name,
                    description: request.body.description
                })
            }
            console.log("Catégorie ajouté : " + request.body.name ," ", request.body.description)
        }catch(error){
            console.trace(error);
            response.status(500).send(error);
        }
    },

    selectOneCategory: async (request, response) => {
        try {
            const category = await Category.findAll();
            let targetId = parseInt(request.body.categoryList);
            const selectedCategory = await Category.findOne({
                where: {
                    id: targetId
                }
            });
    
            if(!category) {
                response.render('adminCategory', {
                    error: 'Aucun category trouvé en base',
                });
            } else {
                //console.log(user);
                response.render('adminCategory', {
                    selectedCategory,
                    category,
                    msg: 'category trouvé !'
                });
            }
        } catch(error) {
            console.log(error);
            response.status(500).send(error);
        }
    },
    updateCategory: async(request, response) => {
        try{  
            
            const targetName = request.body.name;
            const selectedCategory = await Category.findOne({
                where:{
                    name: targetName
                }
            });
            console.log(request.body);
    
            if(selectedCategory) {      
    
                selectedCategory.name = request.body.name;
                selectedCategory.description = request.body.description;
    
                await selectedCategory.save();
    
                const category = await Category.findAll();
    
                response.render('adminCategory', {
                    category,
                    msg: 'Catégorie mis à jour'
                });
            } else {
                response.render('adminCategory', {
                    msg: 'La mise à jour n\'a pas pu se faire'
                });
            }
        }catch(error){
            console.trace(error);
            response.status(500).render(error);
        };
    },

    deleteOneCategory: async(request, response) => {
        try{
            let targetId = parseInt(request.body.deletedCategory);
            console.log(targetId);
            const selectedCategory = await Category.findOne({
                where: {
                    id: targetId
                }
            });

            await selectedCategory.destroy();
            const category = await Category.findAll();
            response.render('adminCategory',{
                category,
                msg : "Catégorie supprimé"
            });
        }catch(error){
            console.trace(error);
            response.status(500).send(error)
        }
    }


}
module.exports = adminCategoryController;