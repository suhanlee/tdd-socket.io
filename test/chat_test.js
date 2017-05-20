const mocha = require('mocha');
const io = require('socket.io-client');
const assert = require('assert');

describe('chat test', function() {
    beforeEach( done => {
        server = require('../chat').server;
        done();
    });

    it("#client chat", (done) => {
        let server_address = "http://localhost:3001";
        let client1 = io.connect(server_address);
        let client2 = io.connect(server_address);

        let message1 = "hello";
        let message2 = "hi";

        client1.emit("message", message1);
        client2.emit("message", message2);

        client1.on("message", (msg) => {
            console.log("received :" + msg);
            assert.ok(msg);
        });

        client2.on("message", (msg) => {
            console.log("received :" + msg);
            assert.ok(msg);
        });

        setTimeout(done, 1000);
    });
});