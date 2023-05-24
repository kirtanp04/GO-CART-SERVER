const express = require('express');
const Register = require('../controller/user/Register');
const Login = require('../controller/user/Login');
const addToCart = require('../controller/user/addToCart');
const getCartData = require('../controller/user/getCartData');
const getUserData = require('../controller/user/getUserData');
const deleteItem = require('../controller/user/deletCartItem');
const placeOrder = require('../controller/user/placeOrder');
const UpdateCart = require('../controller/user/upDateCart');
const getAllData = require('../controller/user/getAllData');
// const Check = require('../middleware/auth');
const userRouter =  express.Router()

userRouter.post('/register',Register)

userRouter.post('/login',Login)


// add to cart

userRouter.post('/addtocart/:token/:id',addToCart)

// get cart Data

userRouter.get('/getcart/:token',getCartData)

// get userData

userRouter.get('/getuserdata/:token',getUserData)


// delet cart product

userRouter.delete('/deletcartitemtem/:id',deleteItem)

// placed order

userRouter.post('/placeorder/:token',placeOrder)

// update cart

userRouter.post('/updatecart/:token/:id',UpdateCart)

// get all data

userRouter.get('/getalldata/:token',getAllData)

module.exports = userRouter