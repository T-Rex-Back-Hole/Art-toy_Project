import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";
import Question from "./Question";
import Subscribe from "./Subscribe";
import News from "./News";

import brander1 from "../../images/brand1.png";
import brander2 from "../../images/brand2.png";
import brander3 from "../../images/brand3.png";
import brander4 from "../../images/brand4.png";
import brander5 from "../../images/brand5.png";
import brander6 from "../../images/brand6.png";
import Arrival from "./Arrival";
import Category from "./Category";

const Main = () => {
  const { products } = useData();

  return (
    <>
      <section id="refer">
        <h1 className="font-bold text-3xl text-center my-10 lg:text-5xl">
          Art Toy reference
        </h1>
        <div className="overflow-hidden relative">
          <div className="flex lg:space-x-5 animate-marquee-mobile lg:animate-marquee">
            {/* แสดงสินค้าทั้งหมดและทำสำเนาเพื่อให้เลื่อนไหลแบบไม่หยุด */}
            {[...products, ...products, ...products].map((product, index) => (
              <Link
                key={index}
                to={`/detail/${product.id}`}
                className="flex-shrink-0 w-full lg:w-1/6 product"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-96 object-contain p-2 rounded-lg lg:aspect-square sm:h-56 md:h-64 lg:h-80"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category ---------------------------------------------------------------------------------------------------------------*/}
      <Category />

      {/* Arrival ---------------------------------------------------------------------------------------------------------------*/}
      <Arrival />

      {/* News ---------------------------------------------------------------------------------------------------------------*/}

      <News />

      <section id="brand" className="my-6 lg:my-12">
        <div
          id="brand-logo"
          className="grid grid-cols-3 gap-4 mx-6 lg:grid-cols-6 lg:my-6"
        >
          <img src={brander1} alt="" className="" />
          <img src={brander2} alt="" className="" />
          <img src={brander3} alt="" className="" />
          <img src={brander4} alt="" className="" />
          <img src={brander5} alt="" className="" />
          <img src={brander6} alt="" className="" />
        </div>
      </section>

      {/* Q&A ---------------------------------------------------------------------------------------------------------------*/}
      <Question />

      {/* Subscribe --------------------------------------------------------------------------------------------------- */}
      <Subscribe />
    </>
  );
};

export default Main;
