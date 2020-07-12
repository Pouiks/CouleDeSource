const express = require("express");
const app = express();
const port = 3000;

const product = require("./product");

app.use(express.static('./assets'));

app.locals.product = product;

app.set("view engine", 'ejs');
app.set('views', './views');

app.listen(port, () => {
    console.log(`server started on ${port}`);
})


app.get("/" ,(request, response, next)=>{
    response.render("index");
});
const tableProduct = [];

for(let element of product){

    console.log(element.title + element.price + element.stock);
}
