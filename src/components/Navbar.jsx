import { Link } from "react-router-dom";

export default function Navbar({ ordersCount }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          SpiceBox
        </Link>

        {/* Links */}
        <div className="space-x-6 flex items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-600 transition"
          >
            Home
          </Link>
          <Link
            to="/discover"
            className="text-gray-700 hover:text-orange-600 transition"
          >
            Discover
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-orange-600 transition"
          >
            About
          </Link>
          {/* Orders link with dynamic count */}
          <Link
            to="/orders"
            className="text-gray-700 hover:text-orange-600 transition font-semibold"
          >
            Orders ({ordersCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}
