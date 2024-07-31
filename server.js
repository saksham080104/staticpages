const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const user = require("./utility/user.json");
const path = require("path");
const fileURLtoPath = require("url");



const PORT = 5000;


const app = express();
app.use(express.json());

//static files wala middleware
app.use(express.static(path.resolve(__dirname, "./Public")));

// properties of express has been transfered into app
app.use(express.json());

app.get('/user', (req, res) => {
    res.send(user);

});

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./public", "index.html"));
})

app.get("/contact", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./public", "contact.html"));
})

app.listen(PORT, () => {
console.log(`server is running on port ${PORT}`.green);
});