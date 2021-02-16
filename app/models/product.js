const Sequelize = require('sequelize');
const sequelize = require('../database');
class Product extends Sequelize.Model{};

Product.init({
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price_ht: Sequelize.DECIMAL,
    price_no_rebate: Sequelize.DECIMAL,
    brand: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    product_reference: Sequelize.STRING,
    ean: Sequelize.INTEGER,
    color: Sequelize.STRING,
    matter: Sequelize.STRING,
    size: Sequelize.STRING,
    size_unit: Sequelize.STRING,
    weight: Sequelize.DECIMAL,
    weight_unit: Sequelize.STRING
},{


    sequelize, // Le connecteur
    tableName: "product", // Nom de la table
});

module.exports = Product;