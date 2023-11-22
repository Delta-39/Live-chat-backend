const { Router } = require("express");

const mainRouter = Router();

mainRouter.get('/',(req,res)=>{
    res.send('Hello World!')
})


module.exports = mainRouter