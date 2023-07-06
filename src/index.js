const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")

const app = express();

dotenv.config();

app.use(cors())

app.use(express.json());

const productController = require("./products/product.controller");
app.use("/products", productController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API Running in port : ${port}`);
});
