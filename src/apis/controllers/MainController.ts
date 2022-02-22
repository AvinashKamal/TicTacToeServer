import { SocketController, OnConnect, ConnectedSocket, SocketIO } from 'socket-controllers';
import { Socket, Server } from 'socket.io';


@SocketController()
export class MainController {

    
    @OnConnect()
    /**
     * onConnection
     */
    public onConnection(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
        console.log("New socket connected: ", socket.id);
        socket.on("custom_event", (data) => {
            console.log("Data ", data);
            
        })
    }

}
