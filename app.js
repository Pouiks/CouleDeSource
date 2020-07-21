require('dotenv').config();

const express = require("express");
const router = require('./app/router');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3000;
const categories = require("./categories")
const product = require("./product");




app.locals.product = product;
app.locals.categories = categories;

app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.use(express.static('./assets'));
app.set("view engine", 'ejs');
app.set('views', './views');


app.use( session({
    secret: 'Hello, we are Jason and we make beautiful projects',
    saveUninitialized: true,
    resave: true,
    cookie: {
        userName: 1000*60*10 ,// <= le cookie a 10 minutes de vie
        password: 1000*60*10
    }
}) );
app.use(router);
 


app.listen(port, () => {
    console.log(`server started on ${port}`);
});






