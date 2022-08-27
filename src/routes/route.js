const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare=  require("../middlewares/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createUsers", userController.createUser  )
router.post("/login", userController.loginUser)
//The userId is sent by front end
router.get("/userData/:userId",middleWare.checkToken,userController.getUserData)
router.put("/updateUser/:userId",middleWare.checkToken, userController.updateUser)
router.delete("/deleteUser/:userId", middleWare.checkToken, userController.deleteUser)

module.exports = router;