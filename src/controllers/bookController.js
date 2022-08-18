
const BookModel = require('../models/bookModel.js')
const AuthorModel = require('../models/authorModel.js')

const createBook = async function(req,res){
    let data = req.body
    let createdBook = await BookModel.create(data)
    res.send({ msg : createdBook })
}

const createAuthor = async function(req,res){
    let data = req.body
    let createdBook = await AuthorModel.create(data)
    res.send({ msg : createdBook })
}

const getBook = async function(req,res){
    let data = req.body
    let foundAuthor = await AuthorModel.findOne({ data}).select({author_id:1,_id:0})
    
    let books = await BookModel.find( foundAuthor).select({bookName:1,_id:0})

    res.send({ msg : books })
}

const updatePrice = async function(req,res){
    let data = req.body
    let foundBook = await BookModel.findOneAndUpdate({data}, { $set:{ "price" : 150}}, {new : true})
    let author = await AuthorModel.findOne({ "author_id" : foundBook.author_id })

    res.send({ msg : [author.authorName, foundBook.price] })
}

const priceBooks = async function(req,res){
    let foundBook = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select( {author_id : 1, _id : 0} )
    let idarray=foundBook.map(x=> x.author_id)

    let author =await  AuthorModel.find({ author_id  : { $in: idarray } }).select( {authorName:1, _id: 0 } )
    res.send({ msg :author})
   
   
   
   
   
   
   
   
   
    // let author = []

    // for(let i=0; i< foundBook.length ; i++){
    //     let name = await AuthorModel.findOne({ "author_id" : foundBook[i].author_id })
    //     if( !author.find(ele => ele == name.authorName ))    author.push(name.authorName)
    // }

    // res.send({ msg : author })
}



// Optional Problems

const getBookAuthor = async function(req,res){
    let data = req.body.authorName
    let foundAuthor = await AuthorModel.findOne({"author_id" : req.params.id})
    let books = await BookModel.find({ "author_id" : foundAuthor.author_id})

    res.send({ msg : books })
}

const authorAge = async function(req,res){
    let foundAuthor = await AuthorModel.find({"age" : { $gt : 50 }})
    let author = []
    let age = []

    for(let i=0; i< foundAuthor.length ; i++){
        let books = await BookModel.find({ "author_id" : foundAuthor[i].author_id})
        books.forEach(ele => {
            if(ele.rating > 4 && !author.find(ele => ele == foundAuthor[i].authorName )){
                author.push(foundAuthor[i].authorName)
                age.push(foundAuthor[i].age)
            }
        })
    }

    res.send({ msg : [author, age] })
}



module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBook = getBook
module.exports.updatePrice = updatePrice
module.exports.priceBooks = priceBooks
module.exports.getBookAuthor = getBookAuthor
module.exports.authorAge = authorAge

