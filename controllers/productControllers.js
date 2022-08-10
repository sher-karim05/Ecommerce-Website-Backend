const Product = require("../models/productModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create product ......Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  if (!product) {
    return next(new ErrorHandler("Product Not Found❌", 404));
  }
  res.status(201).json({
    success: true,
    product,
  });
});

//Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();
  const resultsPerPage = 5;
  const productCount = await Product.countDocuments();
  if (!products) {
    return next(new ErrorHandler("Product Not Found❌"));
  }
  res.status(200).json({
    success: true,
    products,
  });
});

//Get product details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found❌"));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

//Update product details ......PUT/:id
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  //Using ErrorHandler to check error
  if (!product) {
    return next(new ErrorHandler("Product Not Found❌"));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    success: true,
    product,
  });
});

//Delete Product ---DELETE/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  //Use Error Handler to Check errors
  if (!product) {
    return next(new ErrorHandler("Product Not Found❌"));
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully🚮",
  });
});
