const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]

router.post('/players', function (req, res) {
    
    let newname = req.body.name;
    
    num = 0;
    for (let i = 0; i < players.length; i++) {
        let data = players[i];
        

        if (data.name === newname) {
            let num = 1;
            res.send('Try different name')
        }

    }
    if (num == 0) {
        players.push(req.body)

    }

    res.send(players)
});



module.exports = router;
// adding this comment for no reason