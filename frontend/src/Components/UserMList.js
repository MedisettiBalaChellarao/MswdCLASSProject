import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserMList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = process.env.REACT_APP_USERS_API_URL;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5555/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const saveUser = async () => {
    try {
      const userData = { name, email, role };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, userData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, userData);
      }

      setName('');
      setEmail('');
      setRole('');
      fetchUsers();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5555/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const editUser = (user) => {
    setEditingId(user._id);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
      <div className="space-y-4 mb-6">
        <input 
          className="w-full p-2 border border-gray-300 rounded-lg" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          className="w-full p-2 border border-gray-300 rounded-lg" 
          placeholder="Email" 
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          className="w-full p-2 border border-gray-300 rounded-lg" 
          placeholder="Role" 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
        />
        <button 
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={saveUser}
        >
          {editingId ? "Update User" : "Add User"}
        </button>
      </div>
      
      <ul className="space-y-4">
        {users.map(user => (
          <li 
            key={user._id} 
            className="p-4 border border-gray-300 rounded-lg flex justify-between items-center"
          >
            <div>
              <span className="font-semibold">{user.name}</span> - Email: {user.email}, Role: {user.role}
            </div>
            <div className="space-x-2">
              <button 
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                onClick={() => editUser(user)}
              >
                Edit
              </button>
              <button 
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => deleteUser(user._id)}
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

export default UserMList;
