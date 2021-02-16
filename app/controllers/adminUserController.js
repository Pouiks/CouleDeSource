const {User, Category} = require('../models/');
const bcrypt = require('bcrypt');

const adminUserController = {
adminUser: async(request, response) => {
    try{  
        const user = await User.findAll();
        response.render('adminUser', {user});
    }catch(error){
        console.trace(error);
        response.status(500).send(error);
    }
},

addOneUser: async (request, response) => {
    try {
        const user = await User.findOne({
            where: {
                email: request.body.email
            }
        });
        if(user) {
            //il y a déjà un utilisateur avec cet email, on envoie une erreur et les champs saisis
            response.render('adminUser', {
                error: 'Un utilisateur avec cet email existe déjà',
                fields: request.body
            });
        } else {
            //on est bon sur les champs, on crée la version hashée du mot de passe pour le stockage dans la BDD
            const hashedPwd = bcrypt.hashSync(request.body.passwordAdmin, 10);

            //on enregistre le nouvel utilisateur dans la BDD
            await User.create({
                firstname : request.body.firstnameAdmin,
                lastname: request.body.lastnameAdmin,
                date_of_birth: request.body.date_of_birthAdmin,
                age: parseInt(request.body.ageAdmin),
                email: request.body.emailAdmin,
                password: hashedPwd,
                adress: request.body.adressAdmin,
                city: request.body.cityAdmin,
                postal_code: parseInt(request.body.postal_codeAdmin),
                create_at : request.body.create_at,
                role:'admin'
            });
            //l'utilisateur est crée, on redirige vers le login pour qu'il se connecte
            response.redirect('/admin');
            console.log( 'Utilisateur enregistré : ' + request.body.email);

        }
    } catch(error) {
        console.log(error);
        response.status(500).send(error);
    }
},

selectOneUser: async (request, response) => {
    try {
        const user = await User.findAll();
        let targetId = parseInt(request.body.userList);
        const selectedUser = await User.findOne({
            where: {
                id: targetId
            }
        });

        if(!user) {
            response.render('adminUser', {
                error: 'Aucun utilisateur trouvé en base',
            });
        } else {
            //console.log(user);
            response.render('adminUser', {
                selectedUser,
                user,
                msg: 'Utilisateur trouvé !'
            });
        }
    } catch(error) {
        console.log(error);
        response.status(500).send(error);
    }
},

updateUser: async(request, response) => {
    try{  
        
        const targetEmail = request.body.email;
        const selectedUser = await User.findOne({
            where:{
                email: targetEmail
            }
        });
        //console.log(selectedUser);

        if(selectedUser) {      

            selectedUser.firstname = request.body.firstname;
            selectedUser.lastname = request.body.lastname;
            selectedUser.date_of_birth = request.body.date_of_birth;
            selectedUser.age = request.body.age;
            selectedUser.email = request.body.email;
            selectedUser.password = request.body.password;
            selectedUser.adress = request.body.adress;
            selectedUser.city = request.body.city;
            selectedUser.postal_code = request.body.postal_code;
            selectedUser.created_at = request.body.created_at;
            selectedUser.role = request.body.role;

            await selectedUser.save();

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

deleteOneUser: async(request, response) => {
    try{  
        const targetId = parseInt(request.body.deleteUser);
        console.log(targetId);
        const deletedUser = await User.findOne({
        where:{
            id: targetId
        }
        
    });
        
        await deletedUser.destroy();
        const user = await User.findAll();
        response.render('adminUser', {
            user,
            msg: 'Utilisateur supprimé'
        });
    }catch(error){
        console.trace(error);
        response.status(500).render(error);
    }
    } 
}
module.exports = adminUserController;