import React, { useEffect, useState } from "react";
import modern from "../img/modern.jpg";
import contemp from "../img/contemp.jpg";
import artdeco from "../img/artdeco.jpg";
import traditional from "../img/traditional.jpg";
import postmodern from "../img/postmodern.jpg";
import futurestic from "../img/futurestic.jpg";
import bhaumas from "../img/bahumas.jpg";
import colonial from "../img/colonial.jpeg";
import green from "../img/green.jpg";
import brutalist from "../img/brutalist.jpg";
// import "./destinations.scss";
import WOW from "wow.js";
import {
  IconArrowLeftCircle,
  IconArrowRightCircle,
  IconArrowRightTail,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const Architecture = () => {
    const architecture = [
        {
          imageUrl:modern,
          title: "Modernist Architecture",
          description:
            "Emphasizes form, minimalism, and functionality with clean lines and simple geometric shapes.",
        },
        {
          imageUrl: contemp,
          title: "Contemporary Architecture",
          description:
            "Reflects the current design trends, often incorporating innovative materials and sustainable practices.",
        },
        {
          imageUrl: artdeco,
          title: "Art Deco Architecture",
          description:
            "Characterized by sleek lines, geometric shapes, bold colors, and decorative elements evoking glamour and luxury.",
        },
        {
          imageUrl: traditional,
          title: "Traditional/Classical Architecture",
          description:
            "Inspired by historical styles like Greek, Roman, or Renaissance architecture with ornate details and symmetry.",
        },
        {
          imageUrl: postmodern,
          title: "Postmodern Architecture",
          description:
            "Challenges traditional ideas, often incorporating playful elements, diverse materials, and unconventional shapes.",
        },
        {
          imageUrl: brutalist,
          title: "Brutalist Architecture",
          description:
            "Known for its use of raw concrete, geometric forms, and a focus on functionality over aesthetics.",
        },
        {
          imageUrl: futurestic,
          title: "Futurist Architecture",
          description:
            "Envisions futuristic designs with innovative, experimental, and often unconventional structures.",
        },
        {
          imageUrl: green,
          title: "Green/Sustainable Architecture",
          description:
            "Prioritizes eco-friendly materials, energy efficiency, and sustainable design principles.",
        },
        {
          imageUrl: bhaumas,
          title: "Bauhaus Architecture",
          description:
            "Focuses on the harmony between function and design, emphasizing simplicity and practicality.",
        },
        {
          imageUrl: colonial,
          title: "Colonial Architecture",
          description:
            "Influenced by the colonial period with a mix of European and local styles, often featuring symmetry and pillars.",
        },
        // Add more architectural styles as needed
      ];
      

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const architectsright = () => {
    const container = document.getElementById("cardsContainers");
    if (container) {
      container.scrollBy({
        left: 300, // Adjust this value to suit your scroll distance
        behavior: "smooth",
      });
    }
  };

  const architectsleft = () => {
    const container = document.getElementById("cardsContainer");
    if (container) {
      container.scrollBy({
        left: -300, // Adjust this value to suit your scroll distance
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section id="Designs">
        <div
          className=" bg-[#F7F7F7] section pb-10 p-12"
          id="whyme"
          style={{ textAlign: "justify", textJustify: "auto" }}
        >
          <div className="">
            <div
              class="flex justify-center relative"
              style={{ overflowX: "hidden" }}
            >
              <button
                onClick={architectsleft}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#FF3D00] rounded-full p-2  transition duration-500 hover:scale-125 "
              >
                <IconArrowLeftCircle className="text-white" />
              </button>
              <div
                className="flex flex-row overflow-x-auto space-x-4 no-scrollbar p-4 max-w-screen-xl mx-auto"
                id="cardsContainers"
              >
                {architecture.map((card, index) => (
                  <div
                    key={index}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow "
                    style={{
                      flex: "0 0 auto",
                      width: "calc(100% / 3)",
                      minWidth: "300px",
                      maxWidth: "100%",
                      borderRadius:"30px"
                    }}
                  >
                    
                      <img
                        className=" w-full h-40 object-cover"
                        src={card.imageUrl}
                        alt=""
                      />
              
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                          {card.title}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
                        {card.description}
                      </p>
                      <Link
                       to="/contactus"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FF3D00] rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300  transform transition duration-500 hover:scale-125"
                      >
                        Get Free Quote
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
                <button
                  onClick={architectsright}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF3D00] rounded-full p-2   transition duration-500 hover:scale-125"
                >
                  <IconArrowRightCircle className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Architecture;
