// create an express app
const express = require("express")
const app = express()

const path = require("path");

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/login.html"));
})

app.get("/cadastro", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/cadastro.html"));
})

app.get("/menu", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/menu.html"));
})

app.get("/campanhas", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/campanhas.html"));
})

app.get("/niveis/1", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/niveis/jogo.html"));
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running at port 3000"));