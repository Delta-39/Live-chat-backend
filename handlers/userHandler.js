const {loginController, registerController} = require('../controllers/userController')

const registerHandler = async (res,req) =>{
    const {data} = req.body

    try {
        const register = await registerController(data)
        res.status(200).json(register)
    } catch (error) {
        console.log(error)
    }
}

const loginHandler = async (res,req) =>{
    const {data} = req.body

    try {
        const login = await loginController(data)
        res.status(200).json(login)

    } catch (error) {
        console.log(error)
    }
}

module.exports ={ registerHandler, loginHandler}