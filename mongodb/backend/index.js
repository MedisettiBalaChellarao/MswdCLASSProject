const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Import path module for serving frontend
const OrdersRoutes = require('./Routes/OrdersRoutes');
const ProductsRoutes = require('./Routes/ProductsRoutes');
const UsersRoutes = require('./Routes/UsersRoutes');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', OrdersRoutes);
app.use('/api', ProductsRoutes);
app.use('/api', UsersRoutes);

// Serve the frontend build folder
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle other routes and serve index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
