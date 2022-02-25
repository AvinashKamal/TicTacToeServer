"use strict";
exports.__esModule = true;
var socket_io_client_1 = require("socket.io-client");
console.log("Working");
var connect = function () {
    var details = process.argv.slice(2);
    var socket = (0, socket_io_client_1.io)("http://localhost:9000");
    socket.on('connect', function () {
        socket.emit("custom_event", { name: details[0], port: details[1] });
    });
};
connect();
