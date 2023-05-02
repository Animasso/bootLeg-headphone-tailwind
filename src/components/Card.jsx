import React from "react";

export const Card = ({ imgCard, titleCard, DescriptionCard, alt }) => {
  return (
    <div className=" max-w-sm border rounded p-3">
      <img className=" rounded h-64 m-auto" src={imgCard} alt={alt} />
      <h1 className="my-5 text-xl">{titleCard} </h1>
      <p>{DescriptionCard}</p>
    </div>
  );
};
