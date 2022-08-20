const PublisherModel= require("../models/publisherModel")

const createPublisher= async function(req,res){
   let data=req.body;
   let publisherCreated= await  PublisherModel.create(data)
   res.send({ans:publisherCreated})
}

module.exports.createPublisher=createPublisher;