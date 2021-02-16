require('dotenv').config();
const express = require('express');
const pg = require('pg');
const session = require('express-session');
const userMW = require('./app/middlewares/userMW');

const PORT = process.env.PORT || 3333;

const app = express();
const router = require('./app/router');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.static(__dirname+'/static'));

//mise en place de la session pour stocker les infos de l'utilisateur
app.use(session({
    secret: 'zjgkjrmpzomù',
    resave: false,
    saveUninitialized: true
}));

app.use(userMW);

app.use(router);

app.listen(PORT, () => {
console.log(`Serveur lancé sur http://localhost:${PORT}`);
});