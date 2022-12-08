// create an express app
const express = require("express")
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express()

const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())

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

app.get("/niveis/:nvl?", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/niveis/jogo.html"));
})

app.get("/nivel/:id", function (req, res) {
    sql.query("select nivel from usuario where id = ?", [req.params.id],(error, results, fields) => {
        res.json(results);
    })
})

app.get("/usuarios", (req, res) => {
    sql.query("select * from usuario", (error, results, fields) => {
        res.json(results);
    })
})

app.post("/cadastrar", (req, res) => {
    sql.query("insert into usuario values (?,?,?,?,?)", [null, req.body.email, req.body.nome, req.body.senha, req.body.nivel])
})

app.put('/salvarnivel', (req, res) => {
    console.log(req.body)
    sql.query("update usuario set nivel = ? where id = ?", [req.body.nivel, req.body.id], (error, results, fields) => {});
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running at port 3000"));