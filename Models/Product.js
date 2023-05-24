const mongoose = require('mongoose');

const productSchema =new mongoose.Schema({
    name:{type:String,require:true},
    categorie:{type:String,require:true},
    description:{type:String,require:true},
    Newprice:{type:Number,require:true},
    Oldprice:{type:Number,require:true},
    image:[],
    Stock:{type:Boolean,require:true},
    productType:{type:String,require:true},
    brand:{type:String,require:true},
    gender:{type:String,require:true},
    color:{type:String,require:true},
    rating:{type:Number,require:true},
    size:[],
    material:{type:String,require:true},
    productFeatures:[],
    warrenty:{type:String,require:true}
})

const Product = mongoose.model('product',productSchema);

module.exports = Product;