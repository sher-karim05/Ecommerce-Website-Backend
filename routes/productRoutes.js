const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

//Getting All the Products ---- GET request
router.route("/products").get(getAllProducts);

//Creating the product ----- POST request
router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct);
module.exports = router;
