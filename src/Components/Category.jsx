import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { CategoryList, ListItem } from "../Styled/styled";

function Category() {
  return (
    <CategoryList>
      <ListItem to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </ListItem>
      <ListItem to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </ListItem>
      <ListItem to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </ListItem>
      <ListItem to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </ListItem>
    </CategoryList>
  );
}

export default Category;
