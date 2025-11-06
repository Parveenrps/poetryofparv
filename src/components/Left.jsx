import React, { useState, useEffect } from 'react';
import pic from '../rb_15737.png'
import { useLocation } from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Left = () => {

    useEffect(()=>{
      let pot = gsap.utils.toArray('.pot');
      let name = gsap.utils.toArray('.name');
      let search = gsap.utils.toArray('.search');


      gsap.from(name, {
        x: -150,
        duration:1,
        delay:0.1,

      })
  
    }, [])
  
  return (
    <div className='bg-secondary w-[58%] flex justify-center items-center'>
      <div className='name flex flex-col gap-[3px]  pl-4'>
        <h1 className={` text-[70px] font-semibold`}>Hey, <span className='font-display font-bold text-primary'>Parv</span> this side! </h1>
        <p className='font-semibold leading-relaxed font-display text-[25px]'>A lover of writting who love to write on love!</p>
        <p className='font-display font-semibold text-[25px]'>"ये जो लिखते हैं हम ये हकीकत नहीं ये ख्वाब है। <br></br>
        और सच कहें तो ये ख्वाब मैंने हकीकत में देखे हैं।" </p>
      </div>

      <img src={pic} className='name w-[250px] h-[250px] fixed -left-9 bottom-2 bg-transparent '  ></img>


    </div>
  )
}

export default Left
