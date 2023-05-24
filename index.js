const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config()
const mongoose = require("mongoose");
const userRouter = require('./Router/userRouter');
const productRouter = require('./Router/productRouter');
const orderdeRouter = require('./Router/orderedRouter');

app.use(cors());
app.use(express.json({limit:"50mb"}))
const PORT = process.env.PORT || 8000

mongoose.connect(process.env.DB_URL).then(()=>console.log("Connected to Database"))

app.use("/user/api",userRouter)
app.use("/product/api",productRouter)
app.use("/ordered/api",orderdeRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})










