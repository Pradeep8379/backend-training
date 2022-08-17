const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksList= async function (req, res) {
    let allUsers= await BookModel.find().select({bookName:1,authorName:1})
    res.send({msg: allUsers})

}

const getBooksYear= async function (req, res) {
    let data=req.query
    let allUsers= await BookModel.find(data)
    res.send({msg: allUsers})

}

const getParticularData= async function (req, res) {
    let data=req.query
    let allUsers= await BookModel.find(data)
    res.send({msg: allUsers})

}


const getXINRBooks= async function (req, res) {
   
    let allUsers= await BookModel.find({ $or:[{"prices.indianPrice":100},{"prices.indianPrice":200},{"prices.indianPrice":500}]}).select({prices:1})
    res.send({msg: allUsers})

}


const getRandomBooks= async function (req, res) {
   
    let allUsers= await BookModel.find({ $or:[{stockAvailable:true},{totalPages:{$gt :200}}]})
    res.send({msg: allUsers})

}
    


module.exports.createBook= createBook
module.exports.getBooksList= getBooksList
module.exports.getBooksYear= getBooksYear
module.exports.getParticularData= getParticularData
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks