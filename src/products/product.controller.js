// layer untuk handle request dan response
// layer untuk handle validasi body
// const prisma = require("../db");

const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  getProductById,
  createProducts,
  deleteProductById,
  editProductById,
} = require("./product.service");

router.get("/", async (req, res) => {
  const products = await getAllProduct();

  res.status(200).send(products);
});

router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await getProductById(productId);

    res.send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

/* --- create many product on postman --- */
// router.post("/",  async (req, res) => {
//   try {
//     const newAllProduct = req.body
//     const createProducts = await prisma.product.createMany({
//       data: newAllProduct,
//       skipDuplicates: true
//     })
//     res.json(createProducts)
//   } catch (err) {
//     console.error(err)
//     res.status(500).send("error")
//   }
  
// })

router.post("/", async (req, res) => {
  const newProductData = req.body;
  const product = createProducts(newProductData);

  res.status(201).send({
    data: product,
    message: "create succes",
  });
});

router.put("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productData = req.body;

    await getProductById(productId);

    if (!(productData.name && productData.price && productData.image && productData.categories)) {
        throw Error("some fields are missing");
      }

    const product = await editProductById(productData, productId);

    res.send({
      data: product,
      message: "edit succes",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productData = req.body;

    await getProductById(productId);

    const product = await editProductById(productData, productId);

    res.status(201).send({
      data: product,
      message: "update patch succes",
    });
  } catch (err) {
    res.status(400).send(err.message);
}
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);

    await getProductById(productId);

    await deleteProductById(productId);

    res.send("delete succes");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
