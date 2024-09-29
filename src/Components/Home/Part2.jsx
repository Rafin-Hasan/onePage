import React from "react";
import { RiFridgeLine } from "react-icons/ri";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { MdConnectedTv, MdMicrowave } from "react-icons/md";
import { GiGymBag, GiWaterFountain, GiBarbecue } from "react-icons/gi";
import { BiSolidWasher } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";
import { FaSwimmer, FaShower, FaTree } from "react-icons/fa";

const Part2 = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* About This Property Section */}
        <h2 className="text-2xl font-bold mb-4">About This Property</h2>
        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        {/* Features & Amenities Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Features & Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <TbAirConditioningDisabled className="text-yellow-500" />
            <span>Air Conditioning</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <MdConnectedTv className="text-yellow-500" />
            <span>TV Cable</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <GiBarbecue className="text-yellow-500" />
            <span>Barbeque</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <GiGymBag className="text-yellow-500" />
            <span>Gymnasium</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <FaSwimmer className="text-yellow-500" />
            <span>Swimming Pool</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <MdMicrowave className="text-yellow-500" />
            <span>Microwave</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <FaShower className="text-yellow-500" />
            <span>Outdoor Shower</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <FaTree className="text-yellow-500" />
            <span>Lawn</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <RiFridgeLine className="text-yellow-500" />
            <span>Refrigerator</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <PiBathtubLight className="text-yellow-500" />
            <span>Sauna</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <BiSolidWasher className="text-yellow-500" />
            <span>Washer</span>
          </div>
          <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
            <GiWaterFountain className="text-yellow-500" />
            <span>Water Fountain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2;
