const jwt = require("jsonwebtoken");

const checkToken = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token)  res.send({ status: false, msg: "token must be present" });
   try{ const decodedToken = await jwt.verify(token, "functionup-plutonium-very-very-secret-key")}
   catch(err){ return res.send({ status: false, msg: "Invalid token" })}
    next()
}

// two methods to execute invalid token line.
// const checkToken = async function (req, res, next) {
//     let token = req.headers["x-Auth-token"];
//     if (!token) token = req.headers["x-auth-token"];
//     if (!token)  res.send({ status: false, msg: "token must be present" });
//     await jwt.verify(token, "functionup-plutonium-very-very-secret-key",
//    function(err){
//     if(err)
//     return res.send({ status: false, msg: "Invalid token" });
//     });
//    next();
   
// };

module.exports.checkToken = checkToken