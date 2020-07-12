const express = require("express");
const product = require("./product");
const routeur = require("./router");
const categories = require("./categories")
const app = express();
const port = 3000;

const tableProduct = [];
const tableCategories = [];
app.locals.product = product;
app.locals.categories = categories

app.use(routeur);
app.use(express.static('./assets'));
app.set("view engine", 'ejs');
app.set('views', './views');

app.listen(port, () => {
    console.log(`server started on ${port}`);
});






