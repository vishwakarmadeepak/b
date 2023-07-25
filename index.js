const express = require("express");
const app = express();
// db connection
require("./dbconnection/db");
// user schema

app.listen("8000", () => {
  console.log(" port is started  success fully ");
});
