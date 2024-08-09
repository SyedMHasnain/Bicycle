"use client";
import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Image from 'next/image';
// import v1 from '..//../../public/v1.png';


const Home  = () => {

  
  return (
    <>
      <Header />
      <Slider />
      {/* content-container*/}
      <div className="flex-1 ">
        <div className="m-20 ">
          <h1 className=" ourcycle text-center text-[5vh] font-semibold ">
            Our cycle
          </h1>
          <p className="text-center">
            It is a long established fact that a reader will be distracted by
            the
          </p>
        </div>
        {/* two boxis */}
        <div
          id="breakpoint-1"
          className="flex pt-34 p-2 gap-4   
         ">
          {/* img-box */}
          <div
            id="box-main"
            className="w-1/2 flex justify-center align-middle ">
            <div id="child-1" className="">
              {/* rectangle */}
              <div id="rectangle"></div>
              <Image
                id="imgsize"
                src={"/hum2.png"}
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
                Cycle
              </h1>

              <p className="textdes text-black mt-32 ">
                "It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters"
              </p>
              <div className="flex justify-between mr-16  mt-8 ">
                {/* BtnEnd */}
                <button id="btn-buy" className="text-white font-bold">
                  Buy Now
                </button>
                <h4 className="text-slate-800 font-bold">
                  Price
                  <span className="text-[#f7c17b]"> $ </span>
                  200
                </h4>
              </div>
              {/* BtnENd */}
            </div>
          </div>
          {/* desc-box-end */}
        </div>
      </div>

      {/*      
     <Footer/> */}
    </>
  );
}


export default Home 