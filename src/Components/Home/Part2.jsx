import React, { useState } from "react";
import { RiFridgeLine } from "react-icons/ri";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { MdConnectedTv, MdMicrowave } from "react-icons/md";
import { GiGymBag, GiWaterFountain, GiBarbecue } from "react-icons/gi";
import { BiSolidWasher } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";
import { FaSwimmer, FaShower, FaTree } from "react-icons/fa";

const Part2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="container p-6 ">
        <div className=" mx-auto bg-white shadow-md rounded-lg p-8">
          {/* About This Property Section */}
          <h2 className="text-2xl font-bold mb-4">About This Property</h2>
          <p className=" mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className=" mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="flex gap-4">
            <div className="w-[6px] bg-yellow-500">.</div>
            <div className="lorem250">
              <p
                className={`leading-relaxed ${
                  isExpanded ? "" : "line-clamp-5"
                } overflow-hidden`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente facere provident, obcaecati consequatur deserunt
                asperiores! Nisi quas temporibus vel saepe tenetur voluptatibus
                aut, alias, nulla placeat minus nam, laudantium porro possimus
                fugit veritatis eum exercitationem. Modi cum esse fugit nobis
                iste fuga nihil ad mollitia ducimus, harum officia doloremque
                neque maiores alias fugiat quas incidunt aperiam at explicabo,
                rerum, minima accusamus. Minus distinctio voluptatibus non quos
                ipsa, rerum repudiandae fuga numquam nemo exercitationem quia
                dolorum maiores cupiditate alias, ullam nisi possimus,
                consequuntur illo enim. Quae incidunt architecto molestias magni
                voluptatibus corporis distinctio eum placeat amet natus,
                blanditiis ab molestiae necessitatibus assumenda at eos et.
                Minima saepe blanditiis, obcaecati ad incidunt itaque eligendi
                unde, laudantium ab consequuntur, fugit officia sunt nemo. Unde
                quibusdam suscipit magnam dignissimos. Porro aperiam iusto
                nobis. Esse molestiae, animi facilis ducimus, repudiandae nihil
                numquam pariatur nostrum veritatis magni accusamus consectetur
                quaerat inventore voluptatem id vel? Esse atque officiis natus
                quia magnam omnis cupiditate totam voluptates, expedita
                excepturi, praesentium explicabo est minima quisquam et porro
                saepe nisi. Fugiat eveniet earum, ipsam delectus, a, maxime
                libero dicta asperiores minima esse culpa. Molestiae deserunt
                quas quaerat, minus et repudiandae vero, doloremque eius
                nesciunt obcaecati quidem ex porro impedit magnam ipsum. Ea
                neque qui beatae illo quaerat impedit officia delectus quibusdam
                earum voluptatum ipsum dignissimos, facere reiciendis quisquam
                ratione necessitatibus repellat quos dicta accusantium non! Fuga
                iusto quasi, ratione, optio modi dignissimos assumenda ab
                officia odit libero praesentium laboriosam dolor nulla suscipit
                necessitatibus. Velit totam accusantium expedita corrupti
                sapiente impedit obcaecati.
              </p>
              <div className="text-right">
                <button
                  onClick={toggleText}
                  className="text-yellow-500 underline mt-2 focus:outline-none"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Amenities Section */}
        <div className=" mx-auto bg-white mt-2 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mt-3 mb-4">Features & Amenities</h2>
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
    </>
  );
};

export default Part2;
