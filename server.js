const mongoose = require("mongoose");
const http = require("http");
const url = require("url");
const fs = require("fs");
const jsonData = require("./db.json");

mongoose.connect("mongodb://localhost:27017/users");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connection Successful!");
  const userSchema = mongoose.Schema({
    name: String,
    email: String,
    address: String,
  });

  const user = mongoose.model("User", userSchema, "user");
  const users = [
    { name: "tuong", email: "tattuong" },
    { name: "tuong", email: "tattuong" },
    { name: "tuong", email: "tattuong" },
  ];
});

const server = http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    console.log(q);

    if (q.pathname === "/api/products") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(jsonData));
      res.end();
      return;
    }

    const filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(3000);
