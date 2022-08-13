const product= require('../models/ProductSchema');



exports.addproduct= function (req, res, next) {
    console.log(req.body);
 

        let newproductdetails = new product({
            "order_id": req.body.order_id,
            "item_name":req.body.item_name,
            "cost":req.body.cost,
            "order_date":req.body.order_date,
            "delivery_date":req.body.delivery_date
        
        })



        product.find({ order_id: req.body.order_id }, function (err, user) {
            console.log(user);

            if (err) {
                res.json(err);
            } else if (user.length == 0) {

                newproductdetails.save((err, newproductdetails) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json("ProductAddedSuccessful");
                    }
                });
            } else if (user.length > 0) {
                res.json("ThisProductExist");
            }
        })

}


exports.getproducts=function(req,res,next){
    // console.log()
    product.find({delivery_date : req.body.delivery_date}, function (err, products) {
        if(err){
            console.log(err)
        }else{
            console.log(products);
            res.json(products)
        }
    })
}


exports.search=function(req,res,next){
    // console.log()
    product.find({order_id : req.body.order_id}, function (err, products) {
        if(err){
            console.log(err)
        }else{
            console.log(products);
            res.json(products)
        }
    })
}

exports.removeproduct=function(req,res,next){
    product.deleteOne({order_id : req.body.order_id}).then((result)=>{
console.log(result);
res.json(result)
}).catch(err=>{
    console.log(err);
    res.json(err);
})
}


exports.updateproduct=function(req,res,next){
    console.log(req.body)
    var id=req.body.order_id;
    var update={'delivery_date':req.body.delivery_date}
    product.updateOne({order_id:id},{$set:update}).then(result=>{
console.log(result);
res.json(result)
}).catch(err=>{
    console.log(err);
    res.json(err);
})
}