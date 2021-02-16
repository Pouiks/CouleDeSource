const Sequelize = require('sequelize');
const sequelize = require('../database');

class Order extends Sequelize.Model{};

Order.init({
    name: Sequelize.STRING,
    description: Sequelize.STRING
},{


    sequelize, // Le connecteur
    tableName: "order", // Nom de la table
});

module.exports = Order;