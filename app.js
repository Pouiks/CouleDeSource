const express = require("express");
const product = require("./product");

const app = express();
const port = 3000;

const tableProduct = [];

app.use(express.static('./assets'));
app.set("view engine", 'ejs');
app.set('views', './views');


app.locals.product = product;



app.listen(port, () => {
    console.log(`server started on ${port}`);
})


app.get("/" ,(request, response, next)=>{
    response.render("index");
});

app.get("/categories", (request, response)=>{
    response.render('categories');
});

app.get("/connexion", (request,response)=>{
    response.render('connexion')
})
app.get('/createAccount', (request, response)=>{
    response.render("createAccount")
})



