import React from 'react'
import Image from "next/image";
const Card = (props) => {
  return (
    <div className="flex-1 ">
      <div className="m-20 ">
        <h1 className=" ourcycle text-center text-[5vh] font-semibold ">
          {props.heading}
        </h1>
        <p className="text-center">
          {props.description}
        </p>
      </div>
      {/* two boxis */}
      <div
        id="breakpoint-1"
        className="flex pt-36  pr-10  
         ">
        {/* img-box */}
        <div id="box-main" className="w-1/2 flex justify-center align-middle ">
          <div id="child-1" className="">
            {/* rectangle */}
            <div id="rectangle"></div>
            <Image
              id="imgsize"
              src={props.image}
              alt="GFG logo served with static path of public directory"
              width={300}
              height={300}
            />
          </div>
        </div>
        {/* img-box end  */}
        {/* descriotionbox */}
        <div
          className=" cycledes w-1/2 flex 
           justify-end  ">
          <div className="">
            <h1 className=" flex justify-end text-black mr-10  text-2xl font-bold text-[7vh] ">
          
            {props.title}
            </h1>

            <p className="textdes text-black mt-32 font-semibold">
             {props.productdes} 
            </p>
            <div className="flex justify-between mr-16  mt-8 ">
              {/* BtnEnd */}
              <button id="btn-buy" className="text-white
              shadow-xl 
              shadow-slate-400 font-bold">
                Buy Now
              </button>
              <h4 className="text-slate-800 font-bold">
                Price
                <span className="text-[#f7c17b]"> $ </span>
              {props.price}
              </h4>
            </div>
            {/* BtnENd */}
          </div>
        </div>
        {/* desc-box-end */}
      </div>
    </div>
  );
}

export default Card