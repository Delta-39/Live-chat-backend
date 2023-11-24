const { Router } = require("express");
const {registerHandler} = require('../handlers/userHandler')

const mainRouter = Router();

mainRouter.get('/',(req,res)=>{
    res.send('Hello World!')
})

mainRouter.post('/register',registerHandler)

module.exports = mainRouter