const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const User = require("../schemas/user");


const loginController = async (data) =>{

}

const registerController = async (data) =>{
    const {name,lastName,email,userName,password} = data
    
    try {
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = new User({
            name:name,
            lastname:lastName,
            email:email,
            username:userName,
            password:hashedPassword
        })
        
        const result = await newUser.save()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {loginController, registerController}