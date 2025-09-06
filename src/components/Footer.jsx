
export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p className="text-sm">&copy; {new Date().getFullYear()} SpiceBox. All rights reserved.</p>
      </div>
    </footer>
  );
}
