const adminMW = (request, response, next) => {
    if (request.session.user === false) {
        //l'utilisateur n'est pas connecté
        response.redirect('/login');
    } else if (request.session.user.role !== 'admin') {
        //l'utilisateur n'a pas les droits admin
        response.render('401');
    } else {
        //l'utilisateur est bien admin
        next();
    }
};

module.exports = adminMW;