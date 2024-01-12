import React, { useEffect, useState } from "react";
import left from "../img/plus tleft.png";
import right from "../img/tright.png";
import WOW from "wow.js";

export const Diffrence = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const cardsData = [
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faComputer}
      //       className="text-blue-400"
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: " Experienced team",
      description:
        "Our exceptional team comprises highly qualified architects, skilled interior designers, adept engineers, and seasoned project managers, boasting extensive industry experience.",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faDesktop}
      //       className="text-blue-400"
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Comprehensive services",
      description:
        "Consolidating diverse services, we ensure convenience by offering a full spectrum of solutions all in one place.",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faMobileScreen}
      //       className="text-blue-400 "
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Personal touch",
      description:
        "We remain devoted to personalized care, committed to transforming your vision into a tangible and remarkable reality",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faMobileScreen}
      //       className="text-blue-400 "
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Commitment to quality",
      description:
        "We use only the highest quality materials and employ meticulous craftsmanship to deliver exceptional results.",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faMobileScreen}
      //       className="text-blue-400 "
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Competitive pricing",
      description:
        "We remain devoted to personalized care, committed to transforming your vision into a tangible and remarkable reality",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faMobileScreen}
      //       className="text-blue-400 "
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Sustainable solution",
      description:
        "We prioritize eco-friendly practices and offer sustainable design options, aiming to create spaces that are not only visually appealing but also environmentally conscious.",
    },
  ];
 
  return (
    <>
      <div className=" section pb-10 mt-4" id="why"   style={{ textAlign: "justify", textJustify: "auto" }}>
        <div className="">
          <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#FF3D00] font-bold text-center wow fadeInUp pt-4">
           Why Choose Vagus Realty
          </p>

          <div className="flex flex-wrap justify-center mt-24 wow fadeInUp mx-10 lg:mx-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {cardsData.map((card, index) => (
                <div className="flex" key={index}>
                  <div
                    className="group  bg-white bg-opacity-5 rounded-lg ring-1 ring-[#FF3D00] shadow-lg transform hover:scale-110 transition-transform duration-500 "
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="text-center p-6 wow fadeInUp">
                      {card.logo}
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-base text-center text-[#FF3D00] uppercase font-bold mb-2 wow fadeInUp">
                        {card.title}
                      </h3>
                      <p className="text-[#737070] text-center font-semibold text-base p-3 wow fadeInUp">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Diffrence;
