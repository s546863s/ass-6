import React from "react";

const CartProduct = ({
  cartProducts,
  handleRemoveFromCart,
  handleClearCart,
  setActive,
}) => {
  // Total Amount add function
  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price;
  }, 0);

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
{/* hiden card lenth 0 hole */}
      {cartProducts.length === 0 && (
            <div className="card p-16  bg-base-100 shadow-sm text-center py-12">                         
                <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2> 
                <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
                <button onClick={() => setActive("products")} className="btn btn-active rounded-full font-extrabold  ">Shop Now</button>
            </div>
        )}  
        {cartProducts.length > 0 && (
           <div>
        <div className=" flex justify-between px-16 mt-6">
        <h4 className="text-xl font-semibold">Total:</h4>
        <h2 className="text-2xl font-bold">${totalPrice}</h2>
      </div>
      <div className="my-4">
        <button 
  onClick={() => {
    handleClearCart();   // cart empty
    setActive("products"); // products  active
  }}
  className="btn btn-primary btn-block rounded-full mt-4"
>
  Checkout
</button>
      </div>
      </div>
        )}
    </div>
  );
};

export default CartProduct;
