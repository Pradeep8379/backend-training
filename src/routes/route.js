const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
let persons = [
    {
        name: "pk",
        age: 10,
        votingage: false
    },
    {
        name: "sk",
        age: 20,
        votingage: false
    },
    {
        name: "aa",
        age: 70,
        votingage: false
    },
    {
        name: "sc",
        age: 5,
        votingage: false
    },
    {
        name: "ho",
        age: 40,
        votingage: false
    }
]

router.get('/test-me/:age',function(req,res){
    let legalage=req.params.age;
    let arr=[];
    for(let i=0;i<persons.length;i++){
        let data=persons[i];
         
        if(data.age>legalage){
            data['votingage']=true;
            arr.push(data)
        }
        else{
            data['votingage']=false;
        }
    }
    res.send(arr)
})
module.exports = router;
// adding this comment for no reason