const express = require("express");
const helmet = require("helmet");

const SchemeRouter = require("../schemes/router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(logger);

server.use("/api/schemes", SchemeRouter);

function logger(req, res, next) {
  const { method, url } = req;
  console.log(
    `[${new Date().toLocaleTimeString()}] ${method} request to URL: ${url}`
  );
  next();
}

module.exports = server;
