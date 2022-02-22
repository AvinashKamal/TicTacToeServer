import { Server } from "socket.io";
import { useSocketServer } from 'socket-controllers'

export default (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    })
    console.log(__dirname + "/apis/controllers/*.ts");
    
    useSocketServer(io, { controllers: [__dirname + "/apis/controllers/*.ts"] })

    return io;
}
