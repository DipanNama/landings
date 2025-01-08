const express = require('express');
const app = express();
const path = require('path')

const PORT = process.env.PORT || 4000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/1', (req, res) => {
    res.render("project-1", { root: __dirname });
});

app.get('/2', (req, res) => {
    res.render("project-2", { root: __dirname });
});

app.get('/3', (req, res) => {
    res.render("project-3", { root: __dirname });
});

app.get('/4', (req, res) => {
    res.render("project-4", { root: __dirname });
});

app.get('/5', (req, res) => {
    res.render("project-5", { root: __dirname });
});

app.get('/6', (req, res) => {
    res.render("project-6", { root: __dirname });
});

app.get('/7', (req, res) => {
    res.render("project-7", { root: __dirname });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});