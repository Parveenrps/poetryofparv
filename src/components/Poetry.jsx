import React, { useRef, useState } from "react";
import shayari from "./Shayari";

const Poetry = () => {
  const [cindex, setCindex] = useState(0);
  const scrollTimeout = useRef(null);

  const handleScroll = (event) => {
    if (scrollTimeout.current) return; // Prevent rapid changes

    if (event.deltaY > 8) {
      setCindex((prev) => (prev < shayari.length - 1 ? prev + 1 : 0));
    } else if (event.deltaY < -8) {
      setCindex((prev) => (prev > 0 ? prev - 1 : shayari.length - 1));
    }

    // Debounce effect (prevents multiple rapid updates)
    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 300); // Adjust delay as needed
  };

  return (
    <div
      onWheel={handleScroll}
      className="flex justify-center items-center gap-4 pt-[20%]  "
    >
      <div className="h-[500px] w-[420px] rounded-lg flex justify-center bg-white opacity-[55%] shadow-lg ">
        <div
          dangerouslySetInnerHTML={{ __html: shayari[cindex] }}
          className=" font-bold text-[18px] flex justify-center items-center text-center leading-relaxed "
        ></div>
      </div>

      <div className="">
        {shayari.map((_, index) => (
          <div
            className={` h-2 w-2 gap-4 mt-2 bg-white rounded-full ${
              cindex === index ? "opacity-100" : "opacity-[45%]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Poetry;
