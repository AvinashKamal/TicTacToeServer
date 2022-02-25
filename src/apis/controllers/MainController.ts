import {SocketController, OnConnect, ConnectedSocket, SocketIO, OnDisconnect} from 'socket-controllers';
import { Socket, Server } from 'socket.io';


@SocketController()
export class MainController {

    
    @OnConnect()
    public onConnection(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
        console.log("New socket connected: ", socket.id);
        const connectedSockets = io.sockets.sockets
        console.log("Connected sockets ", connectedSockets.size)
        // if(connectedSockets.size >= 1) {
        //     connectedSockets.forEach((socket) =>{
        //         socket.disconnect(true)
        //     })
        //     console.log("Disconnected all sockets")
        // }
        // console.log("Socket ", socket)
        // console.log("Connected sockets ", connectedSockets.size)
        // socket.on("custom_event", (data) => {
        //     console.log("Data ", data);
        // })
        socket.emit("You have been connected to the server")
    }

    @OnDisconnect()
    public onDisconnect(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
        const connectedSockets = io.sockets.sockets
        connectedSockets.forEach((socket) =>{
            socket.disconnect(true)
        })
    }

}
