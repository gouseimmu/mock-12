const ProductModel = require('../models/Product');
const express = require('express');

const ProductRoute = express.Router();

ProductRoute.get('/', async(req,res)=>{
    if(req.query.name){
    try{
      let prodt = await ProductModel.find({name:req.query.name});
      res.send(prodt);
    }catch(err){
      res.send({msg:err})
    }
    }
    else{
        try{
            let pro = await ProductModel.find();
            res.send(pro);
          }catch(err){
            res.send({msg:err})
          }
    }
});
ProductRoute.get('/sort/:order',async(req,res)=>{
   
    if(req.params.order == 'asc'){
        try{
            let sorting = await ProductModel.find().sort({date:'ascending'})
            res.send({data:sorting});
           }catch(err){
            res.send({msg:err})
           }
    }else{
        try{
            let po = await ProductModel.find().sort({date:'descending'})
            res.send({data:po});
           }catch(err){
            
            res.send({msg:err})
           }
    }
  
})
ProductRoute.post('/',async(req,res)=>{
    let payload = req.body;
    try{
        let newProduct = new ProductModel(payload);
        await newProduct.save();
        res.send("Posted")
    }catch(err){
        
        res.send({msg:err});
    }
})
module.exports = ProductRoute