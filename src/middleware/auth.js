const jwt = require("jsonwebtoken");
const authenticate = function (req, res, next) {
    //check the token in request header

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];



    if (!token) return res.send({ status: false, msg: "token must be present in the request header" })
    //validate this token
    try {
        let decodedToken = jwt.verify(token, 'functionup-plutonium')
        req["token"] = decodedToken.userId;
    }
    catch (err) { return res.send({ status: false, msg: "token is not valid" }) }
    //  req["token"]=decodedToken.userId;
    next()
}


const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = req["token"];
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

    next()
}
module.exports.authenticate = authenticate;
module.exports.authorise = authorise;