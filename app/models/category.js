const Sequelize = require('sequelize');
const sequelize = require('../database');

class Category extends Sequelize.Model{};

Category.init({
    name: Sequelize.STRING,
    description: Sequelize.STRING
},{


    sequelize, // Le connecteur
    tableName: "category", // Nom de la table
});

module.exports = Category;