const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")
const productUserModel = require("../models/productUserModel")

const checkIds= async function(req,res,next){
    let productID=req.body.product;
    let product= await productModel.findById(productID);
    let userID=req.body.user;
    let user= await productUserModel.findById(userID);
    if(user && product){
        next()
    }
    else{
        res.send("enter correct userid or productid")
    }
    
}
 
const createOrder= async function(req,res){
    let fau=req.headers["isfreeappuser"]
    let data=req.body;
    data["isFreeAppUser"]=fau;
    if(fau==true){
        data["amount"]=0;
        res.send(data)
    }
    else{
        let userID= req.body.user;
        let userData=await productUserModel.findById(userID);
        let orderData= req.body;
        let orderAmount=orderData["amount"]
         if(userData["balance"] > orderData["amount"] ){
           
            let userData2= await productUserModel.findOneAndUpdate(
                {_id:userID},
                {$inc :{balance: -orderAmount}}
                )
            let orderData2= await orderModel.create(orderData)
            res.send(orderData2);
         }
         else{
            res.send("insufficient balance")
         }
    }
}


module.exports.checkIds = checkIds
module.exports.createOrder = createOrder
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
