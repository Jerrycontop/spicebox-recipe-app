// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="container mx-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} SpiceBox. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="#"
            className="hover:text-orange-600 transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-orange-600 transition"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
