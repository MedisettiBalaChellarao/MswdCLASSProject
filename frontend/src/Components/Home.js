import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <header className="w-full bg-blue-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to Doorstep</h1>
        <p className="mt-2 text-lg">Bringing services and products to your doorstep</p>
        <Link to="/services" className="mt-4 inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-200">Explore Services</Link>
      </header>
      
      {/* Features Section */}
      <section className="py-10 w-4/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Fast Delivery</h2>
          <p className="mt-2">Get your orders delivered in no time.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Best Prices</h2>
          <p className="mt-2">Affordable rates for all services.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">24/7 Support</h2>
          <p className="mt-2">We are always here to help you.</p>
        </div>
      </section>
      
      {/* Call to Action */}
      <footer className="w-full text-center py-6 bg-gray-800 text-white mt-auto">
        <p className="text-lg">Start using Doorstep today!</p>
        <Link to="/jwtregister" className="mt-3 inline-block bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700">Sign Up Now</Link>
      </footer>
    </div>
  );
};

export default Home;
