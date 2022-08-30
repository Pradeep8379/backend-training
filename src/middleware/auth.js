const jwt = require("jsonwebtoken");
const authenticate = function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        if (!token) return res.status(401).send({ msg: "token must be present in the request header" })
        let decodedToken = jwt.verify(token, 'functionup-plutonium')
        req["token"] = decodedToken.userId;
        next()

    }
    catch (err) { return res.status(500).send({ msg: "server error or token is not valid " }) }
 
}

const authorise = function (req, res, next) {
   try{ let userToBeModified = req.params.userId
    let userLoggedIn = req["token"];
    if (userToBeModified != userLoggedIn) return res.status(403).send({ msg: 'User logged is not allowed to modify the requested users data' })
    next()
   }
   catch(err){ return res.status(500).send({ msg: "server issue" })}
}
module.exports.authenticate = authenticate;
module.exports.authorise = authorise;