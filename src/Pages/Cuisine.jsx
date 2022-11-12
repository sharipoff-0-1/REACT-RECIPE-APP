import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, CardItem } from "../Styled/styled";
import RecipeItemImage from "../Components/RecipeItemImage";

const API_KEY = "1662a96979de4b7e8281aa8b89f03b2a";
const URL_COMPLEX = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

function Cuisine() {
  let { type } = useParams();
  const [allCuisine, setAllCuisine] = useState([]);

  useEffect(() => {
    getCuisine(type);
  }, [type]);
  const getCuisine = async (name) => {
    const api = await fetch(`${URL_COMPLEX}&number=9&cuisine=${name}`);
    const data = await api.json();
    setAllCuisine(data.results);
  };

  return (
    <Grid>
      {allCuisine.map((recipe) => {
        return (
          <CardItem key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <RecipeItemImage img={recipe.image} />
              <h4>{recipe.title}</h4>
            </Link>
          </CardItem>
        );
      })}
    </Grid>
  );
}

export default Cuisine;
