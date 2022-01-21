const express = require("express");
const path = require("path");
const fileRoute = require("./routes/file");
require("./db/db");

const app = express();

app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use("/api/upload", fileRoute);

app.get("/", (req, res) => {
  res.send("hi stackoverflow");
});

let server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("express is working" + port);
});
