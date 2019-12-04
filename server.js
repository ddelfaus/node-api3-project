const express = require('express');

const userRouter = require("./users/userRouter.js")

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}
server.use("/user", userRouter)
module.exports = server;
