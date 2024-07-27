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


const io = new Server(server)
// new Server(server, {cors: transport['websocket']})

const messages = []

io.on('connection', (socket)=>{
    console.log(`Usuario ${socket.id} Connection`)
})