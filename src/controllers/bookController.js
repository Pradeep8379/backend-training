const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorid=book.author
    let checkauthorid= await authorModel.findById(authorid)
    let publisherid=book.publisher
    let checkpublisherid= await publisherModel.findById(publisherid)
    if(checkauthorid  &&  checkpublisherid){
    await bookModel.create(book);
        res.send({data:book})
        
    }
   else{
    res.send( "possible problems => 1.invalid authorId or publisherID 2.no authorId or publisherID provided" )
   }
   
}

const getAllDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author','publisher name'])
    res.send({data: specificBook})

}

const updateHardCover= async function(req,res){
   
    let data =   await publisherModel.find({name : ["Penguin","HarperCollins"]}).select({_id : 1})
    console.log(data);
    let bookid = await bookModel.updateMany({ publisher : data },{ $set : {isHardCover : true  }},{upsert : false})
    let authorIds = await authorModel.find( { rating : { $gt : 3.5 }}).select({_id : 1})
    console.log(authorIds)
    let rating1 = await bookModel.updateMany({author : authorIds }, { $inc : {price :10 }},{upsert : false})
  
     res.send({ data: bookid , rating1})
   
}

module.exports.createBook = createBook
module.exports.getAllDetails = getAllDetails
module.exports.updateHardCover = updateHardCover
