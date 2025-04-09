import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5555/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const saveOrders = async () => {
    try {
      const ordersData = { name, age, grade };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, ordersData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, ordersData);
      }

      setName('');
      setAge('');
      setGrade('');
      fetchOrders();
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  const deleteOrders = async (id) => {
    try {
      await axios.delete(`http://localhost:5555/api/orders/${id}`);
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const editOrders = (order) => {
    setEditingId(order._id);
    setName(order.name);
    setAge(order.age);
    setGrade(order.grade);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Orders List</h2>
      <div className="space-y-4 mb-6">
        <input 
          className="w-full p-2 border border-gray-300 rounded-lg" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          className="w-full p-2 border border-gray-300 rounded-lg" 
          placeholder="Age" 
          type="number"
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
        <input 
          className="w-full p-2 border border-gray-300 rounded-lg" 
          placeholder="Grade" 
          value={grade} 
          onChange={(e) => setGrade(e.target.value)} 
        />
        <button 
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={saveOrders}
        >
          {editingId ? "Update Order" : "Add Order"}
        </button>
      </div>
      
      <ul className="space-y-4">
        {orders.map(order => (
          <li 
            key={order._id} 
            className="p-4 border border-gray-300 rounded-lg flex justify-between items-center"
          >
            <div>
              <span className="font-semibold">{order.name}</span> - Age: {order.age}, Grade: {order.grade}
            </div>
            <div className="space-x-2">
              <button 
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                onClick={() => editOrders(order)}
              >
                Edit
              </button>
              <button 
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => deleteOrders(order._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
