const path = require('path');
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('new user');

    socket.on('disconnect', () => {
        console.log('disconnected ');
    })
});

app.use(express.static(publicPath));

server.listen(3001, () => {
    console.log('server is running on port 3001');
});