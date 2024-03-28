const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
require("./DB/mongoose");
const routes = require("./Routes/index");
const { Server } = require("socket.io");
const { createServer } = require('node:http');
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('someone connected woo');
});

server.listen(2055, () => {
  console.log('server up at 2055')
})

app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => {
  console.log(`something ${port}`);
});

app.use("/", routes);
