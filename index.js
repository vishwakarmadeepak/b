const express = require("express");
const cors = require("cors");
const app = express();

// db;
require("./dbconnection/db");
const router = require("./router/userrouter");

//  midddle ware
app.use(router);
app.use(express.json());
app.use(cors());

app.listen("8000", () => {
  console.log(" port is  working ");
});
