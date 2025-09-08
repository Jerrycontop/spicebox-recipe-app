import { Link } from "react-router-dom";

export default function Navbar({ ordersCount }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          SpiceBox
        </Link>

        {/* Links */}
        <div className="space-x-6">
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
            to="/orders"
            className="text-gray-700 hover:text-orange-600 transition"
          >
            Orders ({ordersCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}
