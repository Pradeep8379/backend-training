const express = require('express');
const router = express.Router();
const UserModel= require("../model/userModel.js")
const UserController= require("../controller/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createBookData )

router.get("/getUsersData", UserController.getBooksData)

module.exports = router;