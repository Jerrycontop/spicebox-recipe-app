import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-teal-600 text-white">
      <h1 className="text-2xl font-bold">SpiceBox</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
      </div>
    </nav>
  );
};

export default Navbar;
