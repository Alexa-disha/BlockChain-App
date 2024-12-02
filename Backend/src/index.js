import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import { connectDB } from "./lib/db.js";
import { app,server } from "./lib/socket.js";

dotenv.config();



const PORT =process.env.PORT
const __dirname =path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"https://localhost:5173",
        credentials: true,
    })
);

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}
server.listen(PORT, () =>{
    console.log("Server Running On Port:" +PORT);
    connectDB()
});