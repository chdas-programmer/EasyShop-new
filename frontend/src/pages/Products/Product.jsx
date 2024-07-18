import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="w-64 ml-2 h-1 p-3 relative">
      <div className="relative">
        {/* <img
          src={product.image}
          alt={product.name}
          className="w-[30rem] h-36 rounded"
        /> */}
         <img
            className="cursor-pointer w-full rounded"
            src={product.image}
            alt={product.name}
            style={{ height: "170px", objectFit: "cover" }}
            
          />
        <HeartIcon product={product} />
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div className="text-lg">{product.name}</div>
            {/* <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-pink-900 dark:text-pink-300">
            ₹ {product.price}
            </span> */}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
