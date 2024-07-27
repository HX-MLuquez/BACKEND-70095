const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const path = require("path");

const { Server } = require("socket.io");

const PORT = 8080;

//* SETEO handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

const io = new Server(server);
// new Server(server, {cors: transport['websocket']})

const messages = [];

io.on("connection", (socket) => {
  console.log(`Usuario ${socket.id} Connection`);
  
  socket.on("userConnect", (data) => {
    console.log(":::", data);
    let message = {
        id: socket.id,
        info: "connection",
        name: data.user,
        message: `usuario: ${data.user} - id: ${data.id} - Conectado`,
      }
    messages.push(message);

    io.sockets.emit('userConnect', messages)

  });

  socket.on("userMessage", (data)=>{
    console.log("||||||", data)
    const message = {
        id: socket.id, 
        info: "message",
        name: data.user,
        message: data.message
    }
    messages.push(message)
    // console.log("---> ", messages)
    io.sockets.emit("userMessage", messages)
  })

  socket.on("typing", (data)=>{
    // console.log(":: :: ::", data)
    socket.broadcast.emit("typing", data)
  })

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});
