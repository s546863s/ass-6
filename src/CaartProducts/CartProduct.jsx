import React from "react";

const CartProduct = ({ cartProducts, handleRemoveFromCart }) => {
  return (
    <div className="my-8">
      <div className="flex flex-col gap-6">
        {cartProducts.map((product) => (
          <div className="card flex  bg-base-100 shadow-sm">
            <div className=" flex justify-between px-7 py-8 items-center ">
              <div>
                <div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16"
                  />
                </div>
                <div className="flex justify-between flex-col gap-4">
                  <h2 className="text-3xl font-bold">{product.title}</h2>
                  <span className="text-xl">
                    ${product.price}/{product.billing}
                  </span>
                </div>
              </div>

              <div className="">
                <p
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="text-red-500 cursor-pointer hover:underline"
                >
                  Remove
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProduct;
