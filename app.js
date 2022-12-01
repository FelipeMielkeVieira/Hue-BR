// create an express app
const express = require("express")
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express()

const path = require("path");

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'hue_br'
});

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

// app.get("/niveis/2", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/niveis/jogo2.html"));
// })

// app.get("/niveis/3", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/niveis/jogo3.html"));
// })

app.get("/usuarios", (req, res) => {
    sql.query("select * from usuario", (error, results, fields) => {
        res.json(results);
    })
})

app.get("/cadastrar_user", (req, res) => {
    sql.query("insert into usuario values (?,?,?,?,?)", [null, req.params.email, req.params.nome, req.params.senha, 0])
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running at port 3000"));