import { useState } from "react";
import Products from "../Products/Products";
import CartProduct from "../CaartProducts/CartProduct";

export default function ButtonWeb({
  products, 
  handleAddToCart, 
  cartProducts,
  handleRemoveFromCart,
  handleClearCart
}) {
  const [active, setActive] = useState("products");

  // console.log(products);

  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex items-center bg-gray-100 rounded-full p-1 w-fit">
          {/* Products Button here */}
          <button
            onClick={() => setActive("products")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
          cursor-pointer
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
          cursor-pointer
        ${
          active === "cart"
            ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white shadow-md"
            : "text-gray-600"
        }`}
          >
            Cart ({cartProducts.length})
          </button>
        </div>
      </section>

      {active === "products" && (
        <div className="">
          <Products products={products} handleAddToCart={handleAddToCart} />
        </div>
      )}
     {active === "cart" && (
  <CartProduct 
    cartProducts={cartProducts} 
    handleRemoveFromCart={handleRemoveFromCart}
    handleClearCart={handleClearCart}
    setActive={setActive}
  />
)}
    </>
  );
}
