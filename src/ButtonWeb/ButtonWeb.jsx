import { useState } from "react";

export default function ButtonWeb() {
  const [active, setActive] = useState("products");

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1 w-fit">
      {/* Products Button here */}
      <button
        onClick={() => setActive("products")}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
        ${
          active === "products"
            ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white shadow-md"
            : "text-gray-600"
        }`}
      >
        Products
      </button>

      {/* Cart Button  here*/}
      <button
        onClick={() => setActive("cart")}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
        ${
          active === "cart"
            ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white shadow-md"
            : "text-gray-600"
        }`}
      >
        Cart (3)
      </button>
    </div>
  );
}
