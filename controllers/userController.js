const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const User = require("../schemas/user");


const loginController = async (data) =>{

}

const registerController = async (data) =>{
    const {userName,email,password} = data
    
    try {
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {loginController, registerController}