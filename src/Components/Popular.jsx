import React, { useState, useContext } from "react";
import RecipeItemImage from "./RecipeItemImage";
import { Wrapper, Card, Gradient } from "../Styled/styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";

import { Context } from "../context/Context";

function Popular() {
  const { randomRecipes } = useContext(Context);

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {randomRecipes.map((recipe) => {
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

export default Popular;
