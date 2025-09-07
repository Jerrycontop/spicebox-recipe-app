// src/pages/AboutPage.jsx
export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        About <span className="text-orange-500">SpiceBox</span>
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
        SpiceBox is your go-to recipe discovery app 🍲. Our mission is to inspire home cooks 
        and food lovers with delicious recipes from around the world. Whether you’re 
        trying something new or perfecting your favorite dish, we’ve got you covered.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-500">🌍 Global Flavors</h3>
          <p className="text-gray-600">
            Explore recipes inspired by diverse cultures and cuisines worldwide.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-500">👩‍🍳 For Everyone</h3>
          <p className="text-gray-600">
            From beginners to pros, our easy-to-follow recipes suit every cooking level.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-500">💡 Inspiration</h3>
          <p className="text-gray-600">
            Discover new ideas daily and keep your cooking fresh and exciting.
          </p>
        </div>
      </div>
    </div>
  );
}
