const mainController = {
    homePage: (request, response) => {
        //console.log(request.headers);
        // grace à cookie-parser, les cookies sont dispo dans l'objet request.cookies
        console.log("Cookies : ", request.cookies);
        console.log("Session : ", request.session );


        // on peut écrire des cookies depuis express.
        // ATTENTION subtilité : comme c'est le navigateur qui stocke les cookies, en fait on donne un ordre "rappel toi de ça" au navigateur.
        // response.cookie('cockpit', 'Jason-RED', {
        //     maxAge: 10000
        // });

        response.render('/', {
            login: request.session.login
        });
    },

    notFound: (req, res) => {
        res.render('404');
    }

};

module.exports = mainController;