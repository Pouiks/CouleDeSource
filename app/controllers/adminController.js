const {User, Category} = require('../models/');
const bcrypt = require('bcrypt');

const adminController = {
    admin: (request, response) => {
        response.render('admin');
    },
// CATEGORY PART
    
// USER PART
    
}

module.exports = adminController;