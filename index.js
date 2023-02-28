const express = require('express');
const cors = require('cors');
const { json } = require('express');
const ProductRoute = require("./Routes/ProductsRoutes")
const connection = require('./config/db')
const app = express();
app.use(cors({origin:"*"}))
app.use(express.json())
app.use('/products',ProductRoute)


app.get('/',(req,res)=>{
    res.send("Hello")
})
app.listen(8080,async()=>{
    try{
        connection;
        console.log("Connected To DataBase");
    }catch(err){
        console.log(err);
    }
    console.log("Running port 8080")
})