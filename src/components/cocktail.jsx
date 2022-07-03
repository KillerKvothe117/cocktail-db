import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, Name, id, info, Glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={Name} />
      </div>
      <div className="cocktail-footer">
        <h3>{Name}</h3>
        <h4>{Glass}</h4>
        <p>{info}</p>
        <Link
          to={`/cocktail/${id}`}
          className="btn btn-primary btn-details"
        >Details</Link>
      </div>
    </article>
  );
};

export default Cocktail;
