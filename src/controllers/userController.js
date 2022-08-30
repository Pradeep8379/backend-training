const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    let savedData = await userModel.create(data);
    console.log(abcd.newAtribute);
    res.status(201).send({ msg: savedData });
  }
  catch (err) { return res.status(500).send({ msg: "server issue" }) };
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({ msg: "username or the password is not corerct", });
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "plutonium",
        organisation: "FUnctionUp",
      },
      "functionup-plutonium"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ data: token });
  }
  catch (err) { return res.status(500).send({ msg: "server issue" }) }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ msg: "No such user exists" });
    res.status(200).send({ data: userDetails });
  }
  catch (err) { return res.status(500).send({ msg: "server issue" }) }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user)
      return res.status(404).send({ msg: "No such user exists" });
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(200).send({ data: updatedUser });
  }
  catch (err) { return res.status(500).send({ msg: "server issue" }) }
};

const postMessage = async function (req, res) {
  try {
    let message = req.body.message
    let user = await userModel.findById(req.params.userId)
    if (!user)
      return res.status(404).send({ msg: "No such user exists" });
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
    res.status(200).send({ data: updatedUser });
  }
  catch (err) { return res.status(500).send({ msg: "server issue" }) }
}

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { "isDeleted": true } }, { new: true });
    if (!updatedUser)
      return res.status(404).send({ msg: "No such user exists" });
    res.status(200).send({ data: updatedUser });
  }
  catch (err) { return res.status(500).send({ msg: "server issue" }) }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser;