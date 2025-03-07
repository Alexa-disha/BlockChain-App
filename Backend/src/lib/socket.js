import {Server} from 'socket.io';
import http from 'http';
import express from 'express'

const app = express();
const server = http.createServer(app);

const io = new Server(server,{
    cors: {
        origin: ["http://localhost:5173"]
    }
});

export function getReceiveSocketId(userId){
    return userSocketMap[userId];
}

io.on("connection",(socket)=>{
    console.log("A user is connected",socket.id);

    socket.on("disconnect",()=>{
        console.log(" A user is disconnectd",socket.id);
    });
});

export {io,app,server};