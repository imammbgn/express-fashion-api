const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(express.json());

const productController = require("./products/product.controller");
app.use("/products", productController);

const PORT = process.env.PORT || process.env.PORT_LOCAL;

app.listen(PORT, () => {
  console.log("API Running in port : " + PORT);
});
