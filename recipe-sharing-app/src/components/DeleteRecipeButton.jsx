/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';


const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
    setSearchTerm('');
  };

  return <button className='delete-btn' onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;