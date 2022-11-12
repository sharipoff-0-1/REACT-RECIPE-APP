import React from "react";
import { Link } from "react-router-dom";
import { Logo, Nav } from "../Styled/styled";
import { GiKnifeFork } from "react-icons/gi";

function Navbar() {
  return (
    <Nav>
      <div>
        <GiKnifeFork />
        <Logo to={"/"}>bon appétit</Logo>
      </div>
    </Nav>
  );
}

export default Navbar;
