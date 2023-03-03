const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Product = require('./models/productmodel');
const User = require('./models/usermodel');

const app = express();
   
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.set('strictQuery', false);

//connnecting our node to the database "UserDB". If the database does not exsists then it will create one by the given name.
mongoose.connect("mongodb://127.0.0.1:27017/BhojanDB");
   
//making schema
// const userSchema = new mongoose.Schema({
//     email:"string",
//     password:"string"
// });
    
//making model
// const User = mongoose.model("User",userSchema);
   

// const express = require('express')

// const router = express.Router()

// const Product = require('../models/productModel')

////////////////////////////////////////////   HANDLING REQUESTS FOR PRODUCTS   ////////////////////////////////////////////
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).send({ data: products})
    } catch (err) {
        res.status(400).send({ error: err})
    }
})

app.get('/products-by-categories', async(req, res) => {
    //$match, $group, and $project are all stages in the MongoDB aggregation pipeline,
    //which is a framework for processing and transforming documents in a MongoDB collection.
    try {
        const products = await Product.aggregate([
            { $match: {}},
            { $group: {
                _id: '$category',
                products: { $push: '$$ROOT'}
            }},
            { $project: { name: '$_id', products: 1, _id: 0}}
        ])
        res.status(200).send({ data: products})
    } catch (err) {
        res.status(400).send({ error: err})
    }
})

///////////////////////////////////// HANDLING REQUEST FOR USERS    //////////////////////////////////////////////////////
// const User = require('../models/userModel')

app.post('/create-user', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        _id: req.body._id,
    })

    user.save((err, user) => {
        if (err) {
            res.status(400).send({ error : err})
        } else {
            res.status(200).send({ data: user})
        }
    })
})
app.get("/",function(req,res){
    res.send("you are sending request to the home route");
})

app.listen(9002,function(){
    console.log("Server Started at port 9002");
})