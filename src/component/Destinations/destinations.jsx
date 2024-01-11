import React, { useEffect, useState } from "react";
import sleek from "../img/sleek.jpg";
import loft from "../img/loft.jpg";
import cottage from "../img/cottage.jpg";
import Penthouse from "../img/penthosue.jpg";
import victoria from "../img/victorias.jpg";
import smart from "../img/smart.jpg";
import retreat from "../img/retreat.jpg";
import zen from "../img/zen.jpg";
import villa from "../img/villa.jpg";
import oasis from "../img/oasis.jpg";
import hightech from "../img/hightech'.jpg";
import eclictric from "../img/electric.jpg";
import art from "../img/art.jpg";
import Artistic from "../img/artistic.jpg";
import mid from "../img/midcentury.jpg";
import "./destinations.scss";
import WOW from "wow.js";
import {
  IconArrowLeftCircle,
  IconArrowRightCircle,
  IconArrowRightTail,
} from "@tabler/icons-react";
import { Link } from "react-scroll";

export const Destinations = () => {
  const interior = [
    {
      imageUrl:sleek,
      title: "Sleek Minimalist  Apartment",
      description:
        "Effortlessly chic and functional for modern living.",
    },
    {
      imageUrl: loft,
      title: "Bohemian-Inspired Loft",
      description:
        "Fusion of colors and textures for a free-spirited atmosphere.",
    },
    {
      imageUrl: cottage,
      title: "Rustic Countryside Cottage",
      description:
        "Warm and inviting interiors with a touch of rustic charm.",
    },
    {
      imageUrl: Penthouse,
      title: "Industrial Urban Penthouse",
      description:
        "Raw and edgy design elements blending modern and industrial aesthetics.",
    },
    {
      imageUrl: victoria,
      title: "Vintage Victorian Home",
      description:
        "Opulent detailing and intricate designs for a timeless appeal.",
    },
    {
      imageUrl: smart,
      title: "Futuristic Smart Home",
      description:
        "Innovative technology integrated seamlessly into contemporary design.",
    },
    {
      imageUrl: retreat,
      title: "Scandinavian-Inspired Retreat",
      description:
        "Clean lines, cozy textures, and a focus on simplicity and functionality.",
    },
    {
      imageUrl: villa,
      title: "Mediterranean Villa Style",
      description:
        "Melding earthy tones and vibrant accents for a Mediterranean feel."
    },
    {
      imageUrl:eclictric,
      title: "Eclectic Fusion of Cultures",
      description:
        "Blend of diverse cultural influences creating a unique and vibrant space.",
    },
    {
      imageUrl: art,
      title: "Art Deco Glamour Apartment",
      description:
        "Bold patterns, luxurious materials, and a touch of vintage sophistication.",
    },
    {
      imageUrl: zen,
      title: "Zen-Inspired Tranquil Space",
      description:
        "Minimalist design fostering peace and harmony through simplicity.",
    },
    {
      imageUrl: Artistic,
      title: "Artistic Boho Chic Haven",
      description:
        "Expressive and eclectic mix of patterns, colors, and cultural elements.",
    },
    {
      imageUrl: mid,
      title: "Mid-Century Modern Revival",
      description:
        "Clean lines, organic shapes, and a blend of contemporary and retro styles.",
    },
    {
      imageUrl: oasis,
      title: "Urban Jungle Oasis",
      description:
        "Embrace nature indoors with lush greenery and earthy accents.",
    },
    {
      imageUrl: hightech,
      title: "High-Tech Entertainment Hub",
      description:
        "Cutting-edge technology integrated into a sophisticated entertainment space.",
    },
    // Add more destinations as needed
  ];

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const scrollRight = () => {
    const container = document.getElementById("cardsContainer");
    if (container) {
      container.scrollBy({
        left: 300, // Adjust this value to suit your scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
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
            <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#FF3D00] font-bold text-center wow fadeInUp pt-4">
              Versatile Style Expertise Guaranteed
            </p>
            <div className="text-base text-[#7B7B7B] text-center mt-3 font-normal leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
              Quality finishes, stylish designs, budget-friendly.
            </div>

            <div
              class="flex justify-center relative"
              style={{ overflowX: "hidden" }}
            >
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#FF3D00] rounded-full p-2  transition duration-500 hover:scale-125 "
              >
                <IconArrowLeftCircle className="text-white" />
              </button>
              <div
                className="flex flex-row overflow-x-auto space-x-4 no-scrollbar p-4 max-w-screen-xl mx-auto"
                id="cardsContainer"
              >
                {interior.map((card, index) => (
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
                       to="contactus"
                       spy={true}
                       smooth={true}
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
                  onClick={scrollRight}
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

export default Destinations;
