import { useEffect, useState } from "react";

const Steps = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("/data/stepsData.json")
      .then(res => res.json())
      .then(data => setSteps(data));

      


  }, []);


  console.log(steps)

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">



        
      {steps.map((step) => (


        <div
          key={step.id}
          className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
        >
          {/* Image */}
          <div className="flex justify-center mb-4 relative">

            <span className="bg-[#4F39f6] rounded-full w-8 h-8 flex items-center justify-center text-white absolute top-0 right-0 transform -translate-x-1/2">
                <span className=" p-4 text-[#0c0735]"> 0{step.id}</span>
            </span>
            <img 
              src={step.image}
              alt={step.title}
              className="w-20 h-20 object-cover p-4 bg-[#dedbf7] rounded-full text-white"
            />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Steps;


