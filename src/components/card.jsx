// Card.js
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, name, price }) => {
  return (
    <Link
      to="/detail-model"
      className="shadow-lg flex flex-col justify-end items-center cursor-pointer"
    >
      <div>
        <img
          src={imageSrc}
          alt={name}
          className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]"
        />
      </div>
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-lg bottom-4 text-primary">฿{price}</p>
    </Link>
  );
};

export default Card;
