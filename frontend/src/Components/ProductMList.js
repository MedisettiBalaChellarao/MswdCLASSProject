import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';

function ProductMList() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = process.env.REACT_APP_PRODUCTS_API_URL || 'http://localhost:5555/api/products';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const saveProduct = async () => {
    try {
      const productData = { name, price, category };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, productData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, productData);
      }

      setName('');
      setPrice('');
      setCategory('');
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const editProduct = (product) => {
    setEditingId(product._id);
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Product List</h2>
      <div className="space-y-4 mb-6">
        <input 
          className="w-full p-2 border border-gray-300 rounded-lg" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          className="w-full p-2 border border-gray-300 rounded-lg" 
          placeholder="Price" 
          type="number"
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <input 
          className="w-full p-2 border border-gray-300 rounded-lg" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        />
        <button 
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={saveProduct}
        >
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </div>
      
      <ul className="space-y-4">
        {products.map(product => (
          <li 
            key={product._id} 
            className="p-4 border border-gray-300 rounded-lg flex flex-col space-y-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">{product.name}</span> - Price: ${product.price}, Category: {product.category}
              </div>
              <div className="space-x-2">
                <button 
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  onClick={() => editProduct(product)}
                >
                  Edit
                </button>
                <button 
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <QRCode value={`Product Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductMList;
