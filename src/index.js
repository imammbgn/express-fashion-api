const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")

const app = express();

dotenv.config();

app.use(cors())

app.use(express.json());

const productController = require("./products/product.controller");
app.use("/products", productController);

const PORT = process.env.PORT || process.env.PORT_LOCAL;

app.listen(PORT, () => {
  console.log("API Running in port : " + PORT);
});
