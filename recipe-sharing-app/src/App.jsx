
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import Recommendations from './components/RecommendationsList';

function App() {

  return (
    
      <Router>
        <div className='main-container'>
          <h1>ALX React Zustand - Recipe</h1>
          <AddRecipeForm />
          <Recommendations />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
