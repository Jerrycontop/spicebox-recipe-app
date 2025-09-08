import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">SpiceBox</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
