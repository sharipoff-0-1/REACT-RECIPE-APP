import React, { useContext } from "react";
import RecipeItemImage from "./RecipeItemImage";
import { Wrapper, Card, Gradient } from "../Styled/styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";

import { Context } from "../context/Context";

function Veggie() {
  const { vegetarianRecipes } = useContext(Context);

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {vegetarianRecipes.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title.split(/\s+/).slice(0, 6).join(" ")}</p>
                    <RecipeItemImage img={recipe.image} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Veggie;
