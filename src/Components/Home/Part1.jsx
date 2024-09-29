import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import { FiHome } from "react-icons/fi";
import PropertyDetails from "./Part1.1";

const Part1 = () => {
  return (
    <>
      <section className="container">
        <div className="w-full bg-[#FFF8E8] rounded-[10px] shadow-md m-3 p-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                A Luxurious Storey Building for Sale/Rent/Short Let
              </h1>
              <p className="text-2xl font-bold">6500 SQFT</p>
            </div>
            <div className=" items-center mt-4">
              <h6 className="text-3xl font-bold text-green-600">₦98,000</h6>
              <p className="text-sm flex justify-center text-gray-500">
                (Negotiable)
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="bg-slate-200 flex gap-2 py-2 pl-2 pr-[915px] rounded-md">
              <span className="text-orange-500 pt-[3px]">
                <MdOutlineLocationOn />
              </span>
              52, C, Mohammadpur, Dhaka, Bd
            </div>
            <div className="bg-slate-200 flex gap-2 py-2 px-2 rounded-md">
              <span className="text-orange-500 pt-[3px]">
                <MdDateRange />
              </span>
              02 months ago
            </div>
            <div className="bg-slate-200 flex gap-2  py-2 px-2 rounded-md">
              <span className="pt-[3px]">
                <FcDocument />
              </span>
              152k <span className="text-blue-400">views</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="w-full bg-[#FFF8E8] rounded-[10px] shadow-md m-3 p-8">
          <div className="flex justify-between">
            <div>
              <h6>Property Overview</h6>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="flex gap-2">
                  <span className="pt-[3px] text-blue-400">
                    <FiHome />
                  </span>
                  Property type:{"  "}
                  <span className="bg-orange-300 p-1 rounded-[6px]">
                    Residential
                  </span>
                </p>
              </div>
              <div>
                <p className="flex gap-2">
                  <span className="pt-[3px] text-blue-400">
                    <FiHome />
                  </span>
                  Purpose:{"  "}
                  <span className="bg-yellow-400 p-1 rounded-[6px]">
                    For sell
                  </span>
                </p>
              </div>
            </div>
          </div>
          <PropertyDetails />
        </div>
        {/* <div>
          <div>
            <div className="flex">
              <div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Part1;
