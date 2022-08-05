const express = require('express');
const abc = require('../introduction/intro')
const def= require('../logger/logger.js')
const ghi=require('../util/helper.js')
const xyz=require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    def.about()
    ghi.today()
    console.log(ghi.month)
    ghi.aboutbatch()
    xyz.trim()
    xyz.changetoLowerCase()
    xyz.changetoUpperCase()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason