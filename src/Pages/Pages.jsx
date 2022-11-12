import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import SearchPage from "./SearchPage";
import RecipeInfo from "./RecipeInfo";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<SearchPage />} />
        <Route path="/recipe/:id" element={<RecipeInfo />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
