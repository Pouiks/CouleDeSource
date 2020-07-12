const express = require("express");
const routeur = express.Router()

routeur.get("/" ,(request, response, next)=>{
    response.render("index");
});

routeur.get("/categories", (request, response)=>{
    response.render('categories');
});

routeur.get("/connexion", (request,response)=>{
    response.render('connexion')
})
routeur.get('/createAccount', (request, response)=>{
    response.render("createAccount")
})
module.exports= routeur;