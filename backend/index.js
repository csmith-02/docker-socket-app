const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)
const cors = require("cors")
const { Server } = require("socket.io")

app.use(cors())

const io = new Server(server, {
    // Origin is subject to change.
    cors: {
        origin: "http://192.168.7.68:4173",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    console.log(`User: ${socket.id} connected...`)

    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data)
    })

})

server.listen(3002, () => {
    console.log("Server is running")
})