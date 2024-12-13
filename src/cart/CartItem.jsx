import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";

const CartItem = ({
  item,
  removeItem,
  isChecked,
  onSelectItem,
  productId,
}) => {
  const { formatMoney } = useData();

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md p-4">
      {/* check-trash --------------------------------------------------------------------------- */}
      <div id="check-trash" className="flex flex-col items-stretch">
        <div className="flex justify-end mb-2">
          {/* <input
            type="checkbox"
            className="mr-2 inline"
            checked={isChecked}
            onChange={onSelectItem}
          /> */}
          <i
            onClick={() => removeItem(productId)}
            className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer"
          ></i>
        </div>
      </div>

      {/* content box --------------------------------------------------------------------------- */}
      <div id="content-box" className="flex lg:justify-evenly">
        <div id="img" className="w-1/2 mx-2 lg:w-1/3">
          <Link
            to={`/detail/${item._id}`} // ใช้ item._id แทน item.id
            className="border-2 rounded-lg border-gray-200 mr-4 flex p-2"
          >
            <img className="" src={item.image} alt={item.name} />
          </Link>
        </div>

        {/* Head price --------------------------------------------------------------------------- */}
        <div id="head-price" className="flex flex-col w-1/2 justify-between">
          <div className="">
            <h2 className="text-xl font-bold lg:text-2xl">{item.name}</h2>

            {item.category === "ArtToy" ? (
              <Link to="/art-toy">
                <p className="text-xs text-blue-500 underline py-1">
                  Category: <span className="">{item.category}</span>
                </p>
              </Link>
            ) : (
              <Link to="/hero">
                <p className="text-xs text-blue-500 underline py-1">
                  Category: <span className="">{item.category}</span>
                </p>
              </Link>
            )}

            <p className="text-base font-semibold text-[#B47AEA] mt-4 lg:text-lg">
              ฿{formatMoney(item.price)}
            </p>
          </div>

    
        </div>
      </div>
    </div>
  );
};

export default CartItem;
