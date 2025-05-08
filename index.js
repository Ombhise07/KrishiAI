const express = require("express");
const app = express();

const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importing the model
const User = require('./mongo.js');

main()
.then(() => {
    console.log("connection succsessfull");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://bhiseom04:ombhise@cluster0.y2jbiqt.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0');
}

// let user = new User({
//     name:"hanuman",
//     email:"hanuman8",
//     age: 100
// });

// user.save().then((res) =>{console.log("save")});

// Show data
app.get("/data",async (req,res) =>{
    let user =  await User.find({})
    console.log(user);
    res.send(user);  
})

app.post("/data/insert",async (req,res) =>{
    let user = await req.body;
    console.log(user);
    
    let newUser = new User({
        name :user.name,
        email : user.email,
        age: user.age
    });

    await newUser.save();
    res.redirect("/data");
})

app.listen(8080,() =>{
    console.log(`working on port ${8080}`);
})