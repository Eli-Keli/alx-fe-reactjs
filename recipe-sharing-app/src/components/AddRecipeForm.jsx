/* eslint-disable no-unused-vars */
// AddRecipeForm component
import React, { useState } from 'react'
import useRecipeStore from '../store/recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({ id: Date.now(), title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <input
                className='form-input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
            className='form-input'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button className='form-submit-btn' type="submit">Add Recipe</button>
        </form>
    );
}

export default AddRecipeForm