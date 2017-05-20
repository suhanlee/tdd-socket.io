const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on("message", msg => {
        console.log(msg);
        socket.broadcast.emit("message", msg);
    });
});

server.listen(3001, () => {
    console.log("server is running");
});
