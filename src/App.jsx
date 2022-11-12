import React from "react";
import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
