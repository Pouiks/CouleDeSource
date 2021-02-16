const {User} = require('../models/');
const bcrypt = require('bcrypt');


const loginController ={
    signInUpPage: (req, res) => {
        res.render('createAccount');
    },
    
    logInPage: (req, res) => {
        res.render('login');
    },

    signUpControlPage: async (req, res) => {

        try{
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (user) {
                res.render('login', {
                    error: 'Un utilisateur avec cet email existe déjà',
                    fields: req.body
                });
            } else {
                if (req.body.password !== req.body.passwordConfirm || (!req.body.password) || (!req.body.passwordConfirm)) {
                    res.render('login', {
                        error: 'La confirmation du mot de passe est incorrecte',
                        fields: req.body
                    });
                } else {
                    const hashedPwd = bcrypt.hashSync(req.body.password, 10);
                    await User.create({
                    firstname : req.body.firstname,
                    lastname: req.body.lastname,
                    date_of_birth: req.body.date_of_birth,
                    age: parseInt(req.body.age),
                    email: req.body.email,
                    password: hashedPwd,
                    adress: req.body.adress,
                    city: req.body.city,
                    postal_code: parseInt(req.body.postal_code),
                    create_at : req.body.create_at,
                    role: 'user'
                    });

                    res.redirect('/login');
                }
            }
        } catch(error) {
            console.log(error);
        }
        
    },

    doLogin: async (request, response) => {
        //on cherche à identifier l'utilisateur à partir de son email
        try {
            const user = await User.findOne({
                where: {
                    email: request.body.email
                }
            });
            if (!user) {
                //aucun utilisateur n'a été trouvé à partir de cet email, on renvoie la vue login avec :
                // - un message d'erreur
                // - ce que l'utilateur avait saisi
                response.render('login', {
                    error: 'Utilisateur inconnu',
                    fields: request.body
                })
            } else {
                //l'utilateur avec cet email existe, on vérifie son mot de passe
                //on utilise bcrypt pour ce test, on compare :
                // - la version du mdp en clair saise par l'utilisateur dans le formulaire
                // - la version cryptée stockée en BDD
                const validPwd = bcrypt.compareSync(request.body.password, user.password);
                console.log(request.body);

                if (!validPwd) {
                    //la validation a échouée, on renvoie la vue login avec un message d'erreur et les champs saisis
                    response.render('login', {
                        error: 'Mot de passe incorrect',
                        fields: request.body
                    });
                } else {
                    //l'utilisateur s'est correctement identifié
                    //TODO : ajouter l'utilisateur en session
                    request.session.user = {
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email,
                        role: user.role
                    };

                    if (request.body.remember) {
                        //l'utilisateur a coché la case 'se souvenir de moi'
                        //on ajoute une date de validité au cookie de la session
                        //il peut ainsi quitter son navigateur et revenir plus tard sur le site
                        //si la date de validité n'est pas passée, il sera automatiquement connecté
                        request.session.cookie.expires = new Date(Date.now() + 3600000);
                    }
                    if(request.session.user.role === 'user') {
                        response.redirect('/');
                    } else if (request.session.user.role === 'admin') {
                        response.redirect('/admin');
                    } 
                    
                }
            }
        } catch(error) {
            console.log(error);
            response.status(500).render('error');
        }
    },
    logout: (request, response) => {
        //on reset des infos du user dans la session
        request.session.user = false;
        //on redirige vers la page d'accueil
        response.redirect('/');
    }
};

module.exports = loginController;