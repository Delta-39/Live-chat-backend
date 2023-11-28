const express = require('express')
const { createServer } = require("http");
const { Server } = require('socket.io');
const app = express();
const httpserver = createServer(app)
const io = new Server(httpserver)
const morgan = require('morgan');
const cors = require('cors');
const mainRouter = require('./routes/index');

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


app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(mainRouter)

io.on("connection",(socket)=>{
    console.log("User connected")
})

app.listen(5000,()=>{
    console.log(`Server listening in port ${5000}`)
})