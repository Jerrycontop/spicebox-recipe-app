// src/pages/AboutPage.jsx
import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-orange-600">About SpiceBox</h2>
      <div className="bg-white shadow-md rounded-xl p-6 leading-relaxed text-gray-700">
        <p className="mb-4">
          Welcome to <span className="font-semibold text-orange-600">SpiceBox</span> — your companion for discovering, saving, 
          and cooking delicious recipes from around the world. Whether you're a seasoned chef 
          or just starting your cooking journey, SpiceBox makes it easy to explore meals and 
          find inspiration.
        </p>
        <p className="mb-4">
          Our goal is simple: bring the joy of cooking closer to everyone. From traditional dishes 
          to modern flavors, SpiceBox helps you connect with recipes that suit your taste and lifestyle.
        </p>
        <p className="font-medium text-gray-800">
          Thank you for being part of our journey. Let’s cook something amazing together!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
