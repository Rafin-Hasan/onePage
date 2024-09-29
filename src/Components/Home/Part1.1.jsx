import React from "react";
import { FaHome, FaBed } from "react-icons/fa";
import { GiResize, GiLandMine } from "react-icons/gi";

const PropertyDetails = () => {
  const data = [
    {
      icon: <FaHome className="text-green-500 text-3xl" />,
      label: "Age of Property",
      value: "03 Years",
      rating: 3.9,
    },
    {
      icon: <FaBed className="text-green-500 text-3xl" />,
      label: "Bedrooms",
      value: "05",
      rating: 5.0,
    },
    {
      icon: <GiResize className="text-green-500 text-3xl" />,
      label: "Property Size",
      value: "6500 sqft",
      rating: 3.9,
    },
    {
      icon: <GiLandMine className="text-green-500 text-3xl" />,
      label: "Land Size",
      value: "20,000 sqft",
      rating: 5.0,
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            {/* Flex container for icon and label aligned to the start */}
            <div className="flex items-start mb-2 space-x-4">
              <div>{item.icon}</div>
              <div>
                <div className="text-lg font-semibold">{item.label}</div>
                <div className="text-gray-600">{item.value}</div>
              </div>
            </div>

            {/* Rating Section */}
            <div className="w-full mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Rating</span>
                <span>{item.rating.toFixed(1)}</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(item.rating / 5) * 100}%`,
                    background: `linear-gradient(to right, #f00, #ff0, #0f0)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;
