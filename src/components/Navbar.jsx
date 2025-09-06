function Navbar() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-red-500">SpiceBox</h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-red-500">Home</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
