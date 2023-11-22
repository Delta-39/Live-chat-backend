const express = require('express')
const server = express();
const morgan = require('morgan')
const cors = require('cors');
const mainRouter = require('./routes/index')
const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')

const dbConnection = async () =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/LiveChat')
        console.log("DB is up")
    } catch (error) {
        console.log(error)
    }
}
dbConnection()


server.use(morgan('dev'))
server.use(express.json())
server.use(cors())
server.use(mainRouter)

const puerto = process.env.port || 5000

server.listen(puerto,()=>{
    console.log(`Server listening in port ${puerto}`)
})