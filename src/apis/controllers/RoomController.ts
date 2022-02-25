import { SocketController, OnMessage, SocketIO, ConnectedSocket, MessageBody } from "socket-controllers";
import { Server, Socket } from "socket.io";

@SocketController()
export class RoomController {

    @OnMessage("join_game")
    public async joinGame(@SocketIO() io: Server, @ConnectedSocket() socket: Socket, @MessageBody() message: any) {
        console.log("New user joining room ", message);
        
        const connectedSockets = io.sockets.sockets
        console.log("Connected Sockets ", connectedSockets)
        const socketRooms = Array.from(socket.rooms.values()).filter((room) => room !== socket.id)

        let maxRoomSize = 5
        let maxPlayersPerRoom = 2

        console.log("Room size: ", connectedSockets.size)

        if(socketRooms.length > 0 || connectedSockets && connectedSockets.size === maxPlayersPerRoom) {
            socket.emit("join_room_error", { error: "Two players are already playing! Would you like to spectate?"})
        } else {
            await socket.join(message);
            socket.emit("room_joined", {});
        }
    }
}
