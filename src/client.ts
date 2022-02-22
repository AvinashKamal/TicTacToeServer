import { Socket, Server } from 'socket.io'
import { io } from 'socket.io-client'

console.log("Workin");

const connect = () => {
    let details = process.argv.slice(2)
    
    
    const socket = io("http://localhost:9000")
    socket.on('connect', () => {        
        socket.emit("custom_event", { name: details[0], port: details[1]})
    })
    
}

connect();