
const Product = require('./product');
const Category = require('./category');
const User = require('./user');
const Order = require('./order');
const OrderLine = require('./orderLine');


// Une Catégorie peut avoir plusieurs items
Category.hasMany(Product, {
    foreignKey: "category_id",
    as: "products"
});
// Un item peut avoir une seule catégorie
Product.belongsTo(Category, {
    foreignKey: "category_id",
    as: "category"
});

User.hasMany(Order, {
    foreignKey: "user_id",
    as: "orders"
});

Order.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

Order.hasMany(OrderLine, {
    foreignKey: "order_id",
    as: "orderLines"
});

OrderLine.belongsTo(Order, {
    foreignKey: "order_id",
    as: "order"
});


module.exports = {Category, Product, User};
 