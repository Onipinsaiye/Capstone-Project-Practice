//import module
import express from "express";

import ejs from "ejs";

import bodyParser from "body-parser";

import Capstone from "./backendDB.js";

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
app.get("/", async(req, res)=>{

    const result = await Capstone.find()
    res.render("index.ejs",{
        webContent: result
    })
})

app.get("/blog", (req, res)=>{
    res.render("blog.ejs")
})

//post routes

app.post("/", (req, res)=>{
    res.redirect("/blog")
})
app.post("/blog", async(req, res)=>{

    let content = req.body["content"]

    let button = req.body["btn"]

    if(button === "" && content !== ""){

        const result = await new Capstone({
            blog: content
        })

        result.save()
        res.redirect("/")
        // blogContent.push(content)
        // res.render("index",{
        //     webContent: blogContent,
        // })
    }else{
        res.redirect("/blog")
    }
})


//start the server
app.listen(port, ()=>{
    console.log(`Server is started successfully on http://localhost:${port}`)
})