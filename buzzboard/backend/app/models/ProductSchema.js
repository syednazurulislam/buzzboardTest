var mongoose= require('mongoose');
const ProductSchema=mongoose.Schema({
  
  order_id:{
    type:String,
    require:true
  },
  item_name:{
    type:String,
    require:true
  },
  cost:{
    type:String,
    require:true
  },
  order_date:{
    type:String,
    require:true
  },
  delivery_date:{
    type:String,
    require:true
  }
});

const products=module.exports=mongoose.model('products', ProductSchema);

// "order_id": "123",
// "item_name":"Samsung Mobile",
// "cost":"400",
// "order_date":"2020/12/01",
// "delivery_date":"2020/12/11"