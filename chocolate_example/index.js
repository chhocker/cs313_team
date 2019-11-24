const express = require("express");
const app = express();

const port = process.env.PORT || 5000;


//Send callback function POINTER
app.get('/list', getList);
app.get('/product', getProduct);
app.post('/product',)
//First is request. Second response.
function getList(req, res) {
    console.log("Received a request for " + req);
    const productList = [
        { id: 1, name: "Lindor truffles" },
        { id: 2, name: "Hershey's" },
        { id: 3, name: "Score" }];

    res.json(productList);
}


function getProduct(req, res) {
    console.log("Getting product details");

    const id = req.query.id;

    console.log("getting details for ID: " + id);

    const productDetails = { id: id, name: "Undefined" };
    res.json(productDetails);
}


app.listen(port, () => {
    console.log("Listening on port: " + port);
});