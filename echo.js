const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', function(socket){
    socket.on("echo", (msg) => {
        console.log(msg);
        let reply = "reply " + msg;
        socket.emit("echo", reply);
    });
});

server.listen(3000, () => {
    console.log("server is running");
});
