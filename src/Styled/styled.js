import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  margin: 4rem 0;
`;
const Card = styled.div`
  width: 100%;
  max-width: 25rem;
  min-height: 18rem;
  margin-top: 1rem;
  border-radius: 2rem;

  img {
    position: absolute;
    max-width: 100%;
    border-radius: 1rem;
    object-fit: cover;
    left: 0;
    height: 90%;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  min-height: 90%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-radius: 1rem;
`;

const CategoryList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 1.5rem;
`;

const ListItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.8rem;
  }

  svg {
    color: #fff;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    h4 {
      color: #fff;
    }

    svg {
      color: #fff;
    }
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;

const CardItem = styled.div`
  img {
    max-width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const FormInput = styled.form`
  margin: 0 20rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.2rem;
    padding: 0.7rem 3rem;
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
    border-radius: 1rem;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  margin-top: 7rem;
  margin-bottom: 5rem;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    font-size: 1rem;
    line-height: 2rem;
  }

  h3 {
    margin-bottom: 2rem;
  }
`;

const RecipeImg = styled.div`
  width: 25rem;
  height: 22rem;

  img {
    max-width: 100%;
    border-radius: 0.7rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-right: 2rem;
  border: 2px solid linear-gradient(35deg, #494949, #313131);
  background-color: #fff;
  color: #313131;
  cursor: pointer;
  &:active {
    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
  }
`;

const Info = styled.div`
  margin-left: 10rem;
  flex: 1;
`;

const TextWrapper = styled.div`
  padding-top: 1rem;
`;

const Text = styled.h3`
  font-size: 1.2rem;
  color: #313131;
  font-weight: 500;
  line-height: 1.5rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", "sans-serif";
`;

const Nav = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    font-size: 2rem;
    margin-right: 0.3rem;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

export {
  Wrapper,
  Card,
  Gradient,
  CategoryList,
  Grid,
  CardItem,
  ListItem,
  FormInput,
  DetailWrapper,
  Button,
  Info,
  RecipeImg,
  TextWrapper,
  Text,
  Logo,
  Nav,
};
