var express = require('express');
var route = express.Router();
var controller=require("./controllers/controllers");

//routing for Product curd operation
route.post('/addproduct',controller.addproduct);
route.post('/getproducts',controller.getproducts);
route.post('/search',controller.search);
route.post('/removeproduct',controller.removeproduct);
route.post('/updateproduct',controller.updateproduct);
 
module.exports= route;