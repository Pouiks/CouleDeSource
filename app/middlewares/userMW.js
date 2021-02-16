//on utilise un middleware maison pour initialiser la propriété user à false dans la session
//on rend cette propriété disponible dans toutes nos vues en l'ajoutant à response.locals


const userMW = (request, response, next) => {
    if (!request.session.user) {
        request.session.user = false;
    }
    response.locals.user = request.session.user;

    next();
};

module.exports = userMW;