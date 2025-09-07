// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1"
      : "text-gray-700 hover:text-orange-500 transition";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          SpiceBox
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/discover" className={linkClasses}>
            Discover
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
