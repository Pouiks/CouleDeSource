const express = require("express");

const mainController = require("./controllers/mainControler");
const router = express.Router()
router.get("/" ,(request, response, next)=>{
    response.render("index");
});

router.get("/categories", (request, response)=>{
    response.render('categories');
});

router.get("/connexion", (request,response)=>{
    response.render('connexion')
});
router.get('/createAccount', (request, response)=>{
    response.render("createAccount")
});

module.exports= router;


require('dotenv').config();

