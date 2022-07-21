const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
    res.render("index")
})

app.get('/mywork', (req,res)=>{
    res.render("my-work")
})

app.get('/codeblocks', (req,res)=>{
    res.render("code-blocks")
})

app.get('/contacts', (req,res)=>{
    res.render("contactus")
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})