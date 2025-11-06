import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const NavBar = ({ onLogoClick, onAboutClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect( ()=>{
    const start = gsap.utils.toArray('.start');

    gsap.from(start,{
      y:-50,
      opacity: 0,
      duration: 1,
      delay:0.2,

    })
  }, [])

  return (
    <div className="start flex z-30 w-screen fixed justify-between p-2 mt-2  ">
      <div className=" flex w-[58%] justify-between items-center">
        <Link to="/">
          <h1
            onClick={onLogoClick}
            className={`logo pl-[20px] text-[35px] font-display transition-colors 
              ${  location.pathname  === "/about" ? " text-balck delay-300" : "text-black delay-50" } `}
          >
            Poetryofparv
          </h1>
        </Link>

        <Link to="/about" onClick={onAboutClick} 
          className={`logo text-[20px] font-bold pl-3 pr-3 pt-1 pb-1 mr-[15px] rounded-full 
          ${ location.pathname === "/about" ? " " : "" }`} >
          About
        </Link>
      </div>

      <div className={`flex items-center justify-between w-[40%] text-[20px] ml-[10px] mr-[10px] `}>
        <div
          className={`search relative flex items-center transition-opacity  ${
            location.pathname === "/about" ? "opacity-0" : "opacity-100 delay-200"} `}
        >
          <input
            type="search"
            placeholder="Search By Sher... "
            className="pl-3 pr-3 pt-1 pb-1 rounded-full outline-none bg-[#212529] hover:bg-[#343a40] placeholder:hover:text-white"
          ></input>

          <CiSearch className=" text-white font-bold text-xl absolute right-3" />
        </div>

        <Link to="https://www.instagram.com/poetryofparv">
          <button className=" ig-bg pl-3 transition-all duration-500 pr-3 pt-1 pb-1 rounded-full font-semibold text-white  ">
            Poetry Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
