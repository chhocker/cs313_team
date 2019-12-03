const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

//Send callback function POINTER
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => { res.sendFile("home.html", { root: __dirname + "/public"}); });

app.listen(port, () => {
    console.log("Listening on port: " + port);
});