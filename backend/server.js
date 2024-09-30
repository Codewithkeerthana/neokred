const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const MarkdownIt = require("markdown-it");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const md = new MarkdownIt();

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("markdown-update", (markdown) => {
    console.log("Received markdown:", markdown);
    const html = md.render(markdown);
    io.emit("html-update", html);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
