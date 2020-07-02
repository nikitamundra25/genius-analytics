const express = require("express"),
  app = express(),
  http = require("http"),
  path = require("path");

app.use(express.static(path.join(__dirname, "dist")));

app.use("/", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);
app.use("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);

const server = http.createServer(app);
const port = process.env.PORT || 8012;

server
  .listen(port)
  .on("listening", () => console.log(`App Started on port ${port}`));
