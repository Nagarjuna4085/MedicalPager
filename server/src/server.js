import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import connectDB from "./config/db.js";
import socketServer from "./socket/socketServer.js";
import "./config/env.js";


const PORT = process.env.PORT || 5000;

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

socketServer(io);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
