const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
