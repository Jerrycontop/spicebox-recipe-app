import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-orange-500">
        SpiceBox
      </Link>

      {/* Nav Links */}
      <div className="flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-orange-500">
          Home
        </Link>
        <Link to="/discover" className="text-gray-700 hover:text-orange-500">
          Discover
        </Link>
        <Link to="/favorites" className="text-gray-700 hover:text-orange-500">
          Favorites
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-orange-500">
          About
        </Link>
      </div>
    </nav>
  );
}
