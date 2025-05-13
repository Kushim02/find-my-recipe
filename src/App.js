//import logo from './logo.svg';

import './App.css';
import SearchBar from './components/SearchBar'
import RecipeCard from './components/RecipeCard'
import Review from './components/Review'
import './components/Review.css'
import { useEffect, useState } from 'react';

//const apiKey = "JqF+m0Bi8JSKm4LnTxH82A==4k8AiMUTlKuFTuTb";


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [hasSearched, setHasSearched] = useState (false);

  // function to search for the recipes
  const searchRecipes = async () => {
    if(!query.trim()) return;
    
    setIsLoading(true);
    try{
      const response = await fetch (
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      const data = await response.json();
      setRecipes(data.meals || []);
      setHasSearched(true);
      console.log(data)
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setIsLoading(false);
  };
  useEffect (() => {
  setQuery("");
  searchRecipes();
  }, [])

const handleSubmit = event => {
  event.preventDefault()
  searchRecipes()
}

  return (
    <div className="App">
      <h1>Best <span className='cook'>Cook</span></h1>
      <SearchBar
      handleSubmit={handleSubmit}
      value= {query}
      onChange = {event => setQuery(event.target.value)}
      isLoading={isLoading}
      />

      <h1><span className='discover'>Discover </span>Simple Delicious and Fast <span className='discover'>Recipes!</span></h1>
      <img/>
      <div className="Recipes">
        {isLoading ? (
          <p>Loading...</p>
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} 
            />
          ))
        ) : hasSearched ? (
          <p>No Recipes Found</p>
        ) : null}
      </div>
      <Review/>
    </div>
  );
  }


export default App;
