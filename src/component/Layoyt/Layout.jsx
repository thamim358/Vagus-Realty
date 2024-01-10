import React,{useEffect} from "react";
import Header from "../Header/Header";
import AboutUs from "../About Us/About Us";
import Diffrence from "../Diffrence/Diffence";
import Donate, { Management } from "../Donate/Management";
import Sumadula from "../Sumadula/Sumadula";
import ContactUs from "../Contact us/Contact";
import Footer from "../Footer/Footer";
import Destinations from "../Destinations/destinations";
import Landing from "../Landing/Landing";
import Architecture from "../Architecture/Architecture";
import Footers from "../Footer/Footers";

function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <>
    <div className="">
      <Landing/>
      <AboutUs/>
      <Destinations/>
      <Architecture/>
      <Diffrence/>
      <Management/>
      <Sumadula/>
      <ContactUs/> 
      <Footers/>
      </div>
    </>
  );
}

export default Layout;
