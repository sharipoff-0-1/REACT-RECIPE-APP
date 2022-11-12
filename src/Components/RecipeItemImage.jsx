import React from "react";

function RecipeItemImage({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}

export default RecipeItemImage;
