import React, { useState, useEffect } from "react";

const API_KEY = "1662a96979de4b7e8281aa8b89f03b2a";
const URL_RANDOM = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`;

const Context = React.createContext();

function ContextProvider({ children }) {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [vegetarianRecipes, setVegetarianRecipes] = useState([]);

  useEffect(() => {
    getRecipeRandom();
    getRecipeVegetarian();
  }, []);

  const getRecipeRandom = async () => {
    const api = await fetch(`${URL_RANDOM}`);
    const data = await api.json();
    setRandomRecipes(data.recipes);
  };

  const getRecipeVegetarian = async () => {
    const api = await fetch(`${URL_RANDOM}&tags=vegetarian`);
    const data = await api.json();
    setVegetarianRecipes(data.recipes);
  };

  return (
    <Context.Provider
      value={{
        randomRecipes,
        vegetarianRecipes,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
