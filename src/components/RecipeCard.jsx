import React from "react";

const RecipeCard = ({recipe}) => {
    return (
        <div className="card">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} width= "100%" className="image"/>
                <h3>{recipe.strMeal}</h3>
                <p><strong>Category:</strong> {recipe.strCategory}</p>
                <p><strong>Area:</strong> {recipe.strArea}</p>
                <p><strong>Instructions:</strong> {recipe.strInstructions.slice(0, 200)}...</p>
                <a href= {recipe.strSource || recipe.strYoutube} target="_blank" rel= "noreferrer">View Recipe</a>
        </div>
    )
}
export default RecipeCard