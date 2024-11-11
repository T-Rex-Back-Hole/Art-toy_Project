import { Link } from "react-router-dom";

const CartItem = ({
  item,
  onQuantityChange,
  onRemove,
  selected,
  onToggleSelect,
}) => {
  const { id, imgSrc, itemName, itemDesc, itemPrice, quantity } = item;

  return (
    <div className="flex flex-col md:flex-row items-start bg-white border border-gray-200 rounded-lg shadow-md py-4 pr-4 relative">
      <input
        type="checkbox"
        className="mx-2"
        checked={selected}
        onChange={() => onToggleSelect(id)}
        aria-label={`Select ${itemName}`}
      />
      <div className="border-2 rounded-lg border-black h-36 w-24 flex items-center justify-center">
        <Link to={`/detail-model/${id}`}>
          <img
            className="rounded-lg refer-img h-28 w-auto object-contain"
            src={imgSrc}
            alt={itemName}
          />
        </Link>
      </div>
      <div className="ml-4 flex-auto relative">
        <i
          className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8 absolute right-0"
          onClick={() => onRemove(id)}
          aria-label={`Remove ${itemName} from cart`}
        ></i>
        <h2 className="text-lg font-bold">{itemName}</h2>
        <p className="text-sm">
          Description: <span className="text-xs">{itemDesc}</span>
        </p>
        <p className="text-lg absolute bottom-4 font-semibold text-primary text-[#5BDEE7]">
          ฿{parseFloat(itemPrice).toLocaleString()}
        </p>
      </div>
      <div className="flex justify-center items-center border w-24 rounded-full py-1 bg-[#B47AEA] absolute bottom-4 right-6">
        <button
          type="button"
          className="inline-flex h-5 w-5 shrink-0 items-center justify-center"
          onClick={() => onQuantityChange(id, quantity - 1)}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
        >
          <svg
            className="h-2.5 w-2.5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M1 1h16"
            />
          </svg>
        </button>
        <span className="mx-3 text-white">{quantity}</span>
        <button
          type="button"
          className="inline-flex h-5 w-5 shrink-0 items-center justify-center"
          onClick={() => onQuantityChange(id, quantity + 1)}
          aria-label="Increase quantity"
        >
          <svg
            className="h-2.5 w-2.5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
