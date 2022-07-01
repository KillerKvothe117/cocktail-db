import React from "react";
import Cocktail from "./cocktail";
import Loading from "./loading";
import { useGlobalContext } from "../context/index";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">Couldn't Find A Match</h2>;
  }

  return <div>CocktailList component</div>;
};

export default CocktailList;
