const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

// your code goes here


app.get('/',(req,res) => {
    res.send("Hello World")
})

let limit = 1000000;

app.post("/add",(req,res) => {

    let output = {
        status : null,
        message : null,
        sum : null,
    }; 

    let num1  = req.body.num1;
    let num2 = req.body.num2;
    let total = num1 + num2;

    if(num1 < -limit || num2 < -limit || total < -limit){
        output.status = "error";
        output.message = "Underflow";
        output.sum = "";
    }
    else if(num1 > limit || num2 > limit || total > limit){
        output.status = "error";
        output.message = "Overflow";
        output.sum = "";
    }

    else if(typeof num1 === "string" || typeof num2 === "string"){
        output.status = "error";
        output.message = "Invalid data types";
        output.sum = "";
    }

    else{
        output.status = "success";
        output.message = "the sum of given two numbers";
        output.sum = total;
    }
    res.send(output);
});

app.post("/sub",(req,res) => {
    let output = {
        status : null,
        message : null,
       difference : null,
    };

    let num1  = req.body.num1;
    let num2 = req.body.num2;
    let total = num1 - num2;

    if(typeof num1 === "string" || typeof num2 === "string"){
        output.status = "error";
        output.message = "Invalid data types";
        output.difference = "";
    }

    else if(num1 < -limit || num2 < -limit || total < -limit){
        output.status = "error";
        output.message = "Underflow";
        output.difference = "";
    }
    else if(num1 > limit || num2 > limit || total > limit){
        output.status = "error";
        output.message = "Overflow";
        output.difference = "";
    }
   
    else{
        output.status = "success";
        output.message = "the difference of given two numbers";
        output.difference = total;
    }
    res.send(output);
   
});

app.post("/multiply",(req,res) => {
    let output = {
        status : null,
        message : null,
       result : null,
    };

    let num1  = req.body.num1;
    let num2 = req.body.num2;
    let total = num1 * num2;

    if(num1 < -limit || num2 < -limit || total < -limit){
        output.status = "error";
        output.message = "Underflow";
        output.result = "";
    }
    else if(num1 > limit || num2 > limit || total > limit){
        output.status = "error";
        output.message = "Overflow";
        output.result = "";
    }

    else if(typeof num1 === "string" || typeof num2 === "string"){
        output.status = "error";
        output.message = "Invalid data types";
        output.result = "";
    }
   
    else{
        output.status = "success";
        output.message = "The product of given numbers";
        output.result = total;
    }
    res.send(output);
});


app.post("/divide",(req,res) => {

    let output = {
        status : null,
        message : null,
       result : null,
    };
    
    let num1  = req.body.num1;
    let num2 = req.body.num2;
    let total = num1 / num2;

    if(num2 === 0){
        output.status = "error";
        output.message = "Cannot divide by zero";
        output.result = "";
    }

    else if(num1 < -limit || num2 < -limit || total < -limit){
        output.status = "error";
        output.message = "Underflow";
        output.result = "";
    }
    else if(num1 > limit || num2 > limit || total > limit){
        output.status = "error";
        output.message = "Overflow";
        output.result = "";
    }

    else if(typeof num1 === "string" || typeof num2 === "string"){
        output.status = "error";
        output.message = "Invalid data types";
        output.result = "";
    }
   
    else{
        output.status = "success";
        output.message = "The division of given numbers";
        output.result = total;
    }
    res.send(output);
   
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
