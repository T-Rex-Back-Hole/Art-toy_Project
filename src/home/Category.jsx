import React from "react";

import ArttoyProduct from "../components/ArttoyProduct";
import HeroProduct from "../components/HeroProduct";

function Category() {
  return (
    <>
      <section id="category" className="">
        <h1 className="text-center text-4xl font-bold my-6 lg:text-5xl lg:mt-12">
          Category
        </h1>
        <div
          id="container-category"
          className="flex flex-col lg:flex-row justify-center mx-auto lg:w-3/4 md:items-center"
        >
          <ArttoyProduct />
          <HeroProduct />
        </div>
      </section>
    </>
  );
}

export default Category;
