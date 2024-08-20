import React from "react";
import { Carousel, button } from "antd";
import Image from "next/image";

const contentStyle = {
  height: "30%",
   margin: "100px 0px 0px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};



const Slider = () => (
  <Carousel autoplay>

    <div>
      <div style={contentStyle}>
        <Image src={"/img4.png"} width={500} height={300} />
        <button
          className="bg-[#242921] border-none text-white px-3 py-1  mb-5 text-center text-none inline-block text-base cursor-pointer rounded-md
        hover:bg-slate-700 hover:text- hover:border-slate-800 transition-colors duration-300
        ">
          Buy Now
        </button>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image src={"/img5.png"} width={500} height={300} />
        <button
          className="bg-[#242921] border-none text-white px-3 py-1  mb-5 text-center text-none inline-block text-base cursor-pointer rounded-md
        hover:bg-slate-700 hover:text- hover:border-slate-800 transition-colors duration-300
        ">
          Buy Now
        </button>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image src={"/kid3.png"} width={500} height={300} />
        <button
          className="bg-[#242921] border-none text-white px-3 py-1  mb-5 text-center text-none inline-block text-base cursor-pointer rounded-md
        hover:bg-slate-700 hover:text- hover:border-slate-800 transition-colors duration-300
        ">
          Buy Now
        </button>
      </div>
    </div>
  </Carousel>
);

export default Slider;
