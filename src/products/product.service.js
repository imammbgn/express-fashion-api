const {
  findProduct,
  findProductById,
  pushProduct,
  updateProduct,
  deleteProduct,
} = require("./product.repository");

const getAllProduct = async () => {
  const products = await findProduct();

  return products;
};

const getProductById = async (id) => {
  if (typeof id !== "number") {
    throw Error("ID MUST A NUMBER");
  }
  const product = await findProductById(id);

  if (!product) {
    throw Error("Product Not Found");
  }

  return product;
};

const createProducts = async (data) => {
  const product = await pushProduct(data);

  return product;
};

const editProductById = async (data, id) => {
    const product = await updateProduct(data, id)

    return product;
  };

const deleteProductById = async (id) => {
    await deleteProduct(id)
};

module.exports = {
  getAllProduct,
  getProductById,
  createProducts,
  editProductById,
  deleteProductById,
};
