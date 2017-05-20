const mocha = require('mocha');
const io = require('socket.io-client');
const assert = require('assert');

describe('echo test', () => {
    beforeEach( done => {
        server = require('../echo').server;
        done();
    });

    it("#send msg", (done) => {
        let server_address = "http://localhost:3000";
        let client = io.connect(server_address);

        let message = "hello";
        client.on("echo", (reply) => {
            assert.equal(reply, "reply " + message);
            done();
        });

        client.emit("echo", message);
    });
});