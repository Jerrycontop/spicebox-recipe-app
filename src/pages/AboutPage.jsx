// src/pages/About.jsx
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          About SpiceBox
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
          Welcome to <span className="font-semibold text-orange-500">SpiceBox</span> —
          your companion for discovering, saving, and cooking delicious recipes
          from around the world. Whether you're a seasoned chef or just starting
          your cooking journey, SpiceBox makes it easy to explore meals and find
          inspiration.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
          Our goal is simple: bring the joy of cooking closer to everyone. From
          traditional dishes to modern flavors, SpiceBox helps you connect with
          recipes that suit your taste and lifestyle.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Thank you for being part of our journey. Let’s cook something amazing
          together!
        </p>
      </div>
    </div>
  );
}
