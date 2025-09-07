export default function RecipeCard({ title, image, description }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
      <img src={image} alt={title} className="w-full h-44 object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>
    </article>
  );
}
