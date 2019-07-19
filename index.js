const express = require("express");
const fs = require("fs");
// const http = require("http");
const https = require("https");
const path = require("path");
const app = express();

const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`);
  next();
};

// Certificate
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/explorer.herc.one/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/explorer.herc.one/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/explorer.herc.one/chain.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

app.use(logRequestStart);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const server = https.createServer(credentials, app);
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at ${port}`);
});

// app.keepAliveTimeout = 65000;
