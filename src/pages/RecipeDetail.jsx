import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-semibold">Recipe Details for {id}</h2>
    </div>
  );
}

export default RecipeDetail;
