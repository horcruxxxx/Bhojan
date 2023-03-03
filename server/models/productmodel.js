const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/BhojanDB");

//making schema
const CategorySchema = new mongoose.Schema({
    name:{type:String,require:true}
});

const ProductSchema = new mongoose.Schema({
    name:{type:String,require:true},
    article:{type:String,require:true},
    discription:{type:String,require:true},
    price:{type:String,require:true},
    category:{type:String,require:true}
});
    
//making model
const Users = mongoose.model("Users",ProductSchema);
const Categories = mongoose.model("Categories",CategorySchema);

module.exports = mongoose.model('Product',ProductSchema);
