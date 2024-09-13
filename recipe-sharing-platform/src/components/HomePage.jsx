/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import recipeData from '../data.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [recipes, setRecipes] = useState()

    useEffect(() => {
        //  load the recipe data from data.json
        setRecipes(recipeData);
    }, [])

    return (
        <div className="container mx-auto p-6 relative">
            <div className="flex justify-start mb-6 md:justify-center lg:justify-center lg:font-semibold">
                <h3 className='font-bold text-2xl py-2 px-2 mr-8'>RECIPE APP</h3>
                <Link to="/add-recipe" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
                    Create a Recipe
                </Link>
            </div>

            <p className='font-semibold text-gray-700'>
                Unlock the joy of cooking with step-by-step recipes tailored to your taste. Explore, create, and share your favorite dishes today!
            </p>

            <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">Our Recipes</h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {recipes && recipes.map((recipe) => (
                    <div key={recipe.id} className="w-full p-4">
                        <Link to={`/recipe/${recipe.id}`}>
                            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                                <img className="w-full object-cover mx-auto rounded-t-lg" src={recipe.image} alt={recipe.title} />
                                <div className="p-4">
                                    <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
                                    <p className="text-gray-600">{recipe.summary}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage