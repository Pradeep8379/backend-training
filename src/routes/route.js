const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const lodash= require('lodash');


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    const months =['jan','feb','march','april','may','june','july','august','sep','oct','nov','dec']
    const months3= lodash.chunk(months,3);
    console.log(months3);
    const odd=[1,2,5,7,9,11,13,15,17,19];
    const last9=lodash.tail(odd);
    console.log(last9);
    const common=[[1,2,3],[2,3,4],[3,4,5],[4,5,6],[5,6,7]];
    const unique =lodash.union([1,2,3],[2,3,4],[3,4,5],[4,5,6],[5,6,7]);
    console.log(unique);
    const arr =[[ 'horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    const pairs=lodash.fromPairs(arr);
    console.log(pairs);

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason