import React from "react";
import CocktailList from "../components/cocktailList";
import SearchForm from "../components/searchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
