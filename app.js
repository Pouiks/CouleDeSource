const express = require("express");
const product = require("./product");
const routeur = require("./router");
const categories = require("./categories")
const users = require("./user")
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

let currentusers =[];
app.use((request, response, next) => {
    app.locals.users = users;
    next();
});

app.locals.product = product;
app.locals.categories = categories;
app.locals.users = users;

app.use(routeur);
app.use(express.static('./assets'));
app.set("view engine", 'ejs');
app.set('views', './views');

app.post('/connexion', (request, response)=>{


    users.push(`${request.body}`, `${request.body.users}`);
    console.log(users)
    
    });  


app.listen(port, () => {
    console.log(`server started on ${port}`);
});






