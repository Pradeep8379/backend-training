const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")




router.post('/createAuthor', BookController.createAuthor)
router.post('/createBook', BookController.createBook)
router.post('/getBook', BookController.getBook)
router.post('/updatePrice', BookController.updatePrice)
router.get('/priceBooks', BookController.priceBooks)


module.exports = router;