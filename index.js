const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const cors = require("cors");

const categories = require("./Datat/category.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("News api is running here");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(" news server is running", port);
});
