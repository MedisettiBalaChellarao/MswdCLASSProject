import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QRCodeViewer = () => {
  const [qrCode, setQrCode] = useState('');
  const productId = '67f353bd03919d6969c7e472'; // Replace with actual MongoDB product _id

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/api/products/${productId}/qrcode`);
        setQrCode(response.data.qrCode);
      } catch (error) {
        console.error('Error fetching QR code:', error);
      }
    };

    fetchQRCode();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">QR Code for Product</h2>
        {qrCode ? (
          <img
            src={qrCode}
            alt="QR Code"
            className="mx-auto w-64 h-64 object-contain border border-gray-300 rounded-md"
          />
        ) : (
          <p className="text-gray-500 text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default QRCodeViewer;
