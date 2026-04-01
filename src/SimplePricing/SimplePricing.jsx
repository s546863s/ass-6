import { useEffect, useState } from "react";

const SimplePricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/data/simlePricing.json")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
      {plans.map((plan) => (
        <div key={plan.id} className={`${plan.badge === "Most Popular" ? "bg-blue-400 text-white " : "opacity-90"}  card  bg-base-100 shadow-sm relative`}>
          <div className="card-body">
            <span className={`badge badge-xs badge-warning ${plan.badge === "Most Popular" ? "block" : "hidden"} absolute -top-1  ml-[30%]`}> {plan.badge} </span>
            <div className="flex flex-col justify-between">
              <h2 className="text-3xl font-bold">{plan.plan}</h2>

              <p>{plan.description}</p>
              <span className="text-xl mt-4">
                {plan.price}/{plan.billing}
              </span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className={feature.available ? "" : ""}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-4 me-2 inline-block ${feature.available ? "text-success" : "text-base-content/50"}`}
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
                  <span className={feature.available ? "" : ""}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className={`${plan.badge === "Most Popular" ? "bg-white text-blue-600 " : "  "} btn btn-primary btn-block rounded-full`}>Subscribe</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimplePricing;
