import { useEffect, useState } from "react";

const Rating = () => {
  const [stats, setStats] = useState(0);

  useEffect(() => {
    fetch("/data/stats.json")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div>
      {stats.length > 0 ? (
        <div className="grid grid-cols-3 items-center justify-center gap-10 py-10">
          {stats.map((stat) => (
            <div key={stat.id} className={`pl-6 ${
        stat.id === 2 || stat.id === 3 ? "border-l-2 border-gray-300" : ""
      }`}>
              <p className="text-5xl text-white font-bold">{stat.value}</p>
              <p className="text-white opacity-95">{stat.label}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Rating;
