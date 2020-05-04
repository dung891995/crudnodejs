var UserModel = require("../models/userModels");

function getAll() {
    return UserModel.find();
}

function addNew(username, password, age, address) {
    return UserModel.create({
        username: username,
        password: password,
        age: age,
        address: address
    })
}

function checkAccount(username) {
    return UserModel.find({username:username})
}

function getById(id) {
    return UserModel.find({ _id: id });
}

function updateUser(id, username, password, age, address) {
    return UserModel.updateOne({
        _id: id
    }, {
        username: username,
        password: password,
        age: age,
        address: address
    })
}

function deleteUser(id) {
    return UserModel.deleteOne({ _id: id })
}
function checkUser(username,password) {
    return UserModel.find({
        $and:[{username:username},{password:password}]
    })
}
function page(npage) {
     return UserModel.find().skip((npage-1)*4).limit(4)   
}
module.exports = {
    getAll: getAll,
    addNew: addNew,
    getById: getById,
    updateUser: updateUser,
    deleteUser: deleteUser,
    checkAccount:checkAccount,
    checkUser:checkUser,
    page:page
}