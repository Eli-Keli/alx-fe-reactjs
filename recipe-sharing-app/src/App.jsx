
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import RecipeList from './components/RecipeList'

function App() {

  return (
    <div className='main-container'>
      <h1>ALX React Zustand - Recipe</h1>
      <AddRecipeForm />
      <RecipeList />
      <RecipeDetails />
    </div>
  )
}

export default App
