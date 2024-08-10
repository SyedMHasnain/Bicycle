"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle = {
  margin: 0,
  height: "460px",
  color: "#fff",
  // lineHeight: "160px",
  textAlign: "center",
  padding:"10px",
  // background: "#364d79",
};
const Slider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} autoplay>
      <div>
        <Image style={contentStyle  } src="/v1.png" width={600} height={200} />
      </div>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
    </Carousel>
  );
};
export default Slider;
