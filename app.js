//import module
import express from "express";

import ejs from "ejs";

import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT || 5000;


//middleware
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.urlencoded({extended: false}));

app.use(express.static("public"));

app.set("view engine", "ejs");

//logics
var blogContent = [];



//get routes
app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.get("/blog", (req, res)=>{
    res.render("blog.ejs")
})

//post routes

app.post("/", (req, res)=>{
    res.redirect("/blog")
})
app.post("/blog", (req, res)=>{

    let content = req.body["content"]

    let button = req.body["btn"]

    if(button === "" && content !== ""){
        blogContent.push(content)
        res.render("index",{
            webContent: blogContent,
        })
    }else{
        res.redirect("/blog")
    }
})


//start the server
app.listen(port, ()=>{
    console.log(`Server is started successfully on http://localhost:${port}`)
})