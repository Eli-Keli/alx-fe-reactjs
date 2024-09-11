/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const [recipe, setRecipe] = useState()

    useEffect(() => {
        //  load the recipe data from data.json
        const fetchRecipe = async () => {
            const response = await fetch("http://localhost:3000/recipes")
            const data = await response.json()
            setRecipe(data)
        }
        fetchRecipe()
    }, [])
    return (
        // display each recipe in a card layout, using Tailwind CSS for styling
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="w-full p-4">
                {recipe && recipe.map((item) => (
                    <div key={item.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <img className="w-full object-cover mx-auto rounded-t-lg" src={item.image} alt={item.title} />
                        <div className="p-4">
                            <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
                            <p className="text-gray-600">{item.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage