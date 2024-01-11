import React, { useEffect } from "react";
import WOW from "wow.js";
import "./Landing.scss";
import logo from "../img/REALTY WHITE.png";
import { Link } from "react-scroll";


function Landing() {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const text = "Vagus Realty";
  return (
    <>
      <section id="home">
        <section className="bg-center bg-no-repeat dashboard  bg-blend-darken relative ">
          <header className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center p-2">
              <img src={logo} alt="wdwd" className="h-20" />
            </div>
            <div className="hidden lg:block">
            
            </div>
          </header>
          <div className="px-4 py-20 lg:p-20 lg:py-40 ">
            <h1 className="mb-4 text-4xl font-bold tracking-tight wow zoomIn leading-none text-white md:text-5xl lg:text-6xl"  data-wow-duration="2s">
            Welcome to <span className="text-[#FF3D00]">Vagus Realty </span> 
            </h1>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight wow flipInX leading-none text-white md:text-5xl lg:text-6xl" data-wow-duration="4s">
            Shaping Your Vision into Reality
            </h1>
            <Link
                       to="contactus"
                       spy={true}
                       smooth={true}
                        className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-[#FF3D00] rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300  transform transition duration-500 hover:scale-125"
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
          {/* Column of circles */}
    
        </section>
      </section>
    </>
  );
}

export default Landing;
