import React from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect } from 'react';
import NavBar from './NavBar';

gsap.registerPlugin(ScrollTrigger);

const NameScroll = () => {

    useEffect( ()=>{
        const namescroll = gsap.utils.toArray('.namescroll');
        const nh = gsap.utils.toArray('.nh');
        const logo = gsap.utils.toArray('.logo');
        const hero = gsap.utils.toArray('.hero');
        const search = gsap.utils.toArray('.search');
        
    
        gsap.to(nh, {
            transform: "translateX(-150%)",
            scrollTrigger :{
                trigger: namescroll,
                markers: false,
                start: "top 0%",
                end: "top -150%",
                scrub:2,
                pin: true,

            }
        })

        gsap.to(logo, {
            color:"white",
            scrollTrigger :{
                trigger: hero,
                markers: false,
                start: "bottom 8%",
                end: "bottom 0%",
                scrub:true,

            }
        })

        gsap.to(search, {
            opacity:0,
            duration:1,
            scrollTrigger :{
                trigger: hero,
                markers: false,
                start: "bottom 8%",
                end: "bottom 50%",
                scrub: true,

            }
        })
    
    }, []);



  return (
    <div className="namescroll z-20 w-[100vw] h-[100vh] bg-black  ">
        <h1 className='nh text-[25vw] pt-5 font-semibold text-white text-nowrap'>
            Hey Parv this side!
        </h1>
    </div>
  )
}

export default NameScroll
