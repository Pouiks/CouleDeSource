const mainController = {
    homePage: (req, res) => {
        //faire des trucs...
        res.render('home');
    },
    notFound: (req, res)=> {
        res.status(404).render('404');
    }
};

module.exports = mainController;