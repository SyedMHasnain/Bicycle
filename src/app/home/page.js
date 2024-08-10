"use client";
import React from 'react'
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import Card from '../Components/Card';
import Footer from '../Components/Footer';

// import v1 from '..//../../public/v1.png';


const Home  = () => {

  return (
    <>
      <Header />
      <Slider />
      <Card
        description="It is a long established fact that a reader will be distracted by the"
        title="Chimano"
        heading="Our Cycles"
        price="200"
        productdes="It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters"
        image="/hum2.png"
      />
      <Card
        title="Fuji"
        heading=""
        price="220"
        productdes="It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters"
        image="/img4.png"
      />
      <Card
        title="Chevorlate"
        heading=""
        price="120"
        productdes="It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters"
        image="/img5.png"
      />
      <Card
        title="Kids"
        heading=""
        price="100"
        productdes="It is a long established fact that a reader will be distracted by
              the readable layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters"
        image="/kid3.png"
      />
      {/* content-container*/}

          
     <Footer/>
    </>
  );
}


export default Home 