import React, { useEffect } from "react";
import "../Header/Header.scss";
import lay from "../img/lay.png"
import layout from "../img/layout.jpg"
import WOW from "wow.js"
import right from "../img/tright.png";
import { useNavigate } from "react-router-dom";
import {
  IconBath,
  IconBedFilled,
  IconCarGarage,
  IconChefHat,
  IconDeviceProjector,
  IconHomeUp,
  IconLayersIntersect,
  IconPhoneCall,
  IconToolsKitchen,
} from "@tabler/icons-react";

export const Sumadula = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const cardsData = [
    {
      logo: (
        <IconLayersIntersect
          className="transform transition duration-500 hover:scale-125"
          size={40}
          style={{ color: "#000000" }}
        />
      ),
      title: "280m",
    },
    {
      logo: (
        <IconBath
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#000000" }}
      />
      ),
      title: "Bath",
    },
    {
      logo: (
        <IconBedFilled
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#000000" }}
      />
      ),
      title: "BedRooms-4",
    },
    {
      logo: (
        <IconHomeUp
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#000000" }}
      />
      ),
      title: "Floors-1",
    },
    {
      logo: (
        <IconChefHat
          className="transform transition duration-500 hover:scale-125"
          size={40}
          style={{ color: "#000000" }}
        />
      ),
      title: "Kitchen",
    },
    {
      logo: (
        <IconCarGarage
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#000000" }}
      />
      ),
      title: "Parking",
    },
    {
      logo: (
        <IconDeviceProjector
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#000000" }}
      />
      ),
      title: "Cinema",
    },
    {
      logo: (
        <IconToolsKitchen
        className="transform transition duration-500 hover:scale-125"
        size={40}
        style={{ color: "#000000" }}
      />
      ),
      title: "Dining",
    },
    
  ];
  return (
    <>

      <div className="section bg-[#F7F7F7] " id="layout"  style={{ textAlign: "justify", textJustify: "auto" }}>
        <div className=" sm:px-2 ">
          <div className="p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="text-4xl text-[#FF3D00] font-bold mb-2 lg:mb-6 self-start wow fadeInUp">
              House Layout
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-4 gap-4 wow fadeInUp pt-10">
                {cardsData.map((card, index) => (
                  <div className="" key={index}>
                    <div className="">
                      <div className="text-center">
                        <div className="flex justify-center">
                          {card.logo}
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <h3 className="text-base text-[#737070] font-semibold text-center">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-gray-500 font-base mt-5 text-base wow fadeInUp ">
              House Plans for Family Of 4 - House Plans for Family Of 4, Family House Plans 4 Bedrooms Home - 4 Bedroom House Plans for 4 Bedroom Single Family 4 Bedroom One Story House Plans
                  </div>
                  <div className="w-full  flex justify-center mt-6 ">
              <img src={lay} alt="Side Image" className="max-w-full " style={{borderRadius:"30px"}} />
            </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="  flex justify-center mt-4 ">
              <img src={layout} alt="Side Image" className="h-2/6 "  />
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sumadula;
