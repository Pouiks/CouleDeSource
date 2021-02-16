const Sequelize = require('sequelize');
const sequelize = require('../database');

class OrderLine extends Sequelize.Model{};

OrderLine.init({
    line_order: Sequelize.INTEGER,
    price_unit: Sequelize.DECIMAL,
    quantity: Sequelize.INTEGER
},{


    sequelize, // Le connecteur
    tableName: "orderLine", // Nom de la table
});

module.exports = OrderLine;