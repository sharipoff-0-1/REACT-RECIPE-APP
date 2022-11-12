import React, { useState } from "react";
import { FormInput } from "../Styled/styled";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate("/searched/" + input);
  }

  return (
    <FormInput onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </FormInput>
  );
}

export default Search;
