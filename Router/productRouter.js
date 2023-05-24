const express = require('express');
const addProduct = require('../controller/product/addProduct');
const getAllProduct = require('../controller/product/getAllProducts');
const productCategories = require('../controller/product/getByCategories');
const ProductId = require('../controller/product/getProductById');
const ProductType = require('../controller/product/getByType');
const getByGender = require('../controller/product/getByGender');
const productPrice = require('../controller/product/getByProductPrice');
const getByBrand = require('../controller/product/getByBrand');
const getByRate = require('../controller/product/getByRating');
const getData = require('../controller/product/getProductData');
const productRouter =  express.Router()


productRouter.post('/addproduct',addProduct)
productRouter.get('/getallproducts',getAllProduct)

// get products by product categories type

productRouter.get('/getproducttype/:categories',productCategories)

// get single product by id

productRouter.get('/getproduct/:id',ProductId)

// get by product type

productRouter.get('/getproductbytype/:type',ProductType)

// get by gender

productRouter.get('/getproductbygender/:categorie/:gender',getByGender)

// get by price range

productRouter.get('/getproductbyprice',productPrice)

// get by brand

productRouter.get('/productbrand/:categorie/:product',getByBrand)

// get by rate

productRouter.get('/getproductbyrate/:categorie/:rate',getByRate)

productRouter.get('/getproductdata/:name',getData)



module.exports = productRouter