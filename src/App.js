import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Recipe from "./components/Recipe";
import './components/css/Header.css'
require("dotenv").config();

const App = () => {
  const API_ID = process.env.REACT_APP_API_ID;
  //console.log(API_ID)
  const API_KEY = process.env.REACT_APP_API_KEY;
  //console.log(API_KEY)
  const [recipes, setRecipes] = useState([]);
  const [search,setSearch]=useState("")
  const [query,setQuery]=useState("chicken")
  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch=(newValue)=>{
    setSearch(newValue)
    console.log(newValue)
  }
  const getSearch=()=>{
    setQuery(search)
  }
  return (
    <div className="App">
      <Header value={search} onChange={updateSearch} onSubmit={getSearch}/>
      <h3 className="heading mb-5" style={{fontFamily: 'Open Sans'}}>All the Recipes {search===""?null:`having ${search}`}</h3>
      <div className="ml-5">
      <div className="row mx-auto">
      {recipes.map((recipe,id) => (
        
        <Recipe
          key={id}
          title={recipe.recipe.label}
          cuisine={recipe.recipe.cuisineType}
          dishType={recipe.recipe.dishType}
          totalTime={recipe.recipe.totalTime}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
      </div>
    </div>
  );
};

export default App;
