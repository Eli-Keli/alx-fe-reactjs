// RecipeDetails component
import { useNavigate, useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavBtn from './FavBtn';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate(); 
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === parseInt(recipeId))
    );

  if (!recipe) {return <div>Something is wrong! - Recipe not found.</div>;}

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <FavBtn recipeId={recipe.id} />
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipeId} />
      <button className='home-btn' onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default RecipeDetails;