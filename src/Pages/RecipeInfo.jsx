import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  DetailWrapper,
  Button,
  Info,
  RecipeImg,
  TextWrapper,
  Text,
} from "../Styled/styled";
import RecipeItemImage from "../Components/RecipeItemImage";

const API_KEY = "767b6e38422c4ae1a167bc1c20339c3e";

function RecipeInfo() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const { id } = useParams();

  const getInfo = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    const data = await api.json();
    setDetails(data);
  };

  useEffect(() => {
    getInfo();
  }, [id]);

  return (
    <DetailWrapper>
      <RecipeImg>
        <h3>{details.title}</h3>
        <RecipeItemImage img={details.image} />
      </RecipeImg>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <TextWrapper>
            <Text dangerouslySetInnerHTML={{ __html: details.summary }}></Text>
            <Text
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></Text>
          </TextWrapper>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((item) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

export default RecipeInfo;
