const express = require("express");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");

const app = express();
const port = 5000;
const URl = "https://northwind.vercel.app/api/products";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const products = await axios.get(URl);
  res.send(products.data);
});

app.get("/:id", async (req, res) => {
  const products = await axios.get(URl + "/" + req.params.id);
  res.send(products.data);
});

app.post("/",async (req, res) => {
    const products = await axios.post(URl,req.body);
  res.send("Got a POST request");
});


app.delete("/:id", async (req, res) => {
  const products = await axios.delete(URl + "/" + req.params.id);
  res.send("Got a DELETE request ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
