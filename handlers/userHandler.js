const {loginController, registerController} = require('../controllers/userController')

const registerHandler = async (req,res) =>{
    const data = req.body

    try {
        const register = await registerController(data)
        res.status(200).json(register)
    } catch (error) {
        res.status(500).send(error)
    }
}

const loginHandler = async (req,res) =>{
    const data = req.body

    try {
        const login = await loginController(data)
        res.status(200).json(login)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports ={ registerHandler, loginHandler}