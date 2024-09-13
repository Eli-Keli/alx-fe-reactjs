/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch('http://localhost:3000/recipes/' + recipeId);
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
            <img className="w-full h-auto rounded-lg mb-4" src={recipe.image} alt={recipe.name} />
            <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside mb-4">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-lg mb-1">{ingredient}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
            <p className="text-lg leading-relaxed">{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetail;