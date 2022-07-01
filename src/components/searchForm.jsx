import React from "react";
import { useGlobalContext } from "../context/index";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <div>
      <h2>SearchForm component</h2>
    </div>
  );
};

export default SearchForm;
