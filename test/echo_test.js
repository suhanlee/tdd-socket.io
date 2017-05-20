const mocha = require('mocha');
const io = require('socket.io-client');
const assert = require('assert');

describe('echo test', function() {
    beforeEach( done => {
        server = require('../echo').server;
        done();
    });

    it("#send msg", (done) => {
        let server_address = "http://localhost:3000";
        this.client = io.connect(server_address);

        let message = "hello";
        this.client.on("echo", (reply) => {
            assert.equal(reply, "reply " + message);
            done();
        });

        this.client.emit("echo", message);
    });
});