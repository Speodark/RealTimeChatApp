const express = require('express');
const app = express();
const http = require('http');

const expressServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(expressServer);

io.on('connection', function (socket) {
    console.log("New User Connected");

    socket.on('message', function (msg) {
        console.log(msg);
    });
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

expressServer.listen(3000, function () {
    console.log("Server is not running at port 300");
});