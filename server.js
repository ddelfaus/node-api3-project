const express = require('express');
const helmet = require("helmet")
const userRouter = require("./users/userRouter.js")

const server = express();





//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} to ${req.originalUrl} TimeStamp: ${new Date().toISOString()}`)
  next();
}

server.use(express.json());
server.use(logger)
server.use(helmet())
server.use("/api/user", userRouter)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});
module.exports = server;
