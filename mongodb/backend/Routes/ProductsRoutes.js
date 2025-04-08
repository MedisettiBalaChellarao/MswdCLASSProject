const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../Controllers/ProductsController');
const Product = require('../Models/Products'); // Required for QR code generation
const QRCode = require('qrcode');

const router = express.Router();

// CRUD Routes
router.post('/products', createProduct);
router.get('/products', getProducts);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// QR Code Generation Route
router.get('/products/:id/qrcode', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');

    const qrData = JSON.stringify({
      name: product.name,
      description: product.description,
      errorCode: product.errorCode,
    });

    const qrCode = await QRCode.toDataURL(qrData);
    res.json({ qrCode });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating QR code');
  }
});

module.exports = router;
