import React from "react";

const Products = ({ products, handleAddToCart }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Available Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 my-8">
        {products.map((product) => (
          <div className="card  bg-base-100 shadow-sm">
            <div className="card-body relative">
              <span className="badge badge-xs badge-warning absolute top-0 right-1">
                {product.badge}
              </span>
              <div className="flex justify-between flex-col gap-4">
                <h2 className="text-3xl font-bold">{product.title}</h2>
                <p>{product.description}</p>

                <span className="text-xl">
                  ${product.price}/{product.billing}
                </span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-primary btn-block rounded-full"
                >
                  {product.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
