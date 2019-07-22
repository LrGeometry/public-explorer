const express = require("express");
const path = require("path");
const app = express();

const logRequestStart = (req, res, next) => {
  // console.info(`${req.method} ${req.originalUrl}`);
  next();
};

app.use(logRequestStart);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
