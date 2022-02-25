"use strict";
exports.__esModule = true;
var socket_io_1 = require("socket.io");
var socket_controllers_1 = require("socket-controllers");
exports["default"] = (function (httpServer) {
    var io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: "*"
        }
    });
    console.log(__dirname + "/apis/controllers/*.ts");
    (0, socket_controllers_1.useSocketServer)(io, { controllers: [__dirname + "/apis/controllers/*.ts"] });
    return io;
});
