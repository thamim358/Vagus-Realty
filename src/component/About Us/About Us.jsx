import React, { useEffect } from "react";
import "../Header/Header.scss";
import girl from "../img/Frame 12.png";
import WOW from "wow.js";
import { useNavigate } from "react-router-dom";
import {
    IconArrowElbowRight,
  } from "@tabler/icons-react";

export const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const handleChange = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about");
  };
  return (
    <div className="section" id="about"          style={{ textAlign: "justify", textJustify: "auto" }}>
      <div className="py-10 sm:px-2">
        <div className="p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="image">
            <img
              className=" mt-4 lg:mt-8 w-full mb-4 lg:mb-8  h-96 rounded-2xl wow fadeInUp"
              src={girl}
              alt="Logo Image"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start lg:items-end  ">
            <div className="text-5xl text-[#FF3D00] font-bold mb-2 lg:mb-6 self-start  wow fadeInUp">
              About 
            </div>
            <div className="text-lg text-black font-normal leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
            
Vagus Realty stands as a premier full-service real estate firm committed to delivering comprehensive solutions tailored to both residential and commercial construction requirements. Our extensive array of services encompasses various facets, including architecture, interior design, liaison services, and proficient project management. With a dedicated focus on every phase of your project, we ensure meticulous handling, leveraging our expertise and unwavering professionalism.
            </div>
            <div className="text-lg text-black font-normal leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
            From conceptualization to completion, Vagus Realty takes pride in providing a seamless experience. Whether it's the intricacies of architectural design, the nuances of interior aesthetics, or the complexities of project coordination, we offer a holistic approach, guaranteeing satisfaction at every step of your journey.
            </div>
            {/* <button
              className="mt-3 flex gap-2 bg-[#FF3D00] self-start text-white font-bold py-1 px-4 rounded-full  wow fadeInUp cursor-pointer text-lg transform transition duration-500 hover:scale-125"
              type="submit"
            >
              MORE <IconArrowElbowRight />
              
            </button> */}
          </div>
        
           
         
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
