// repository berguna untuk komunikasi dengan database
// supaya ganti ORM gampang

const prisma = require("../db");

const findProduct = async () => {
  const products = await prisma.product.findMany();

  return products;
};

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return product;
};

const pushProduct = async (data) => {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      image: data.img,
      categories: data.categories,
      colors: data.colors,
      size : data.size,
      description : data.description,
    },
  });

  return product;
};

const updateProduct = async (data, id) => {
    const product = await prisma.product.update({
        where: {
          id,
        },
        data: {
          name: data.name,
          price: data.price,
          image: data.img,
          categories: data.categories,
          colors: data.colors,
          size : data.size,
          description : data.description,
        },
      });

      return product
}

const deleteProduct = async (id) => {
    await prisma.product.delete({
        where: {
          id,
        },
      });
}

module.exports = {
  findProduct,
  findProductById,
  pushProduct,
  updateProduct,
  deleteProduct
};
