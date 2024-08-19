"use client";
import React from 'react'
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import Footer from '../Components/Footer';
import Productcard from '../Components/Productcard';
const products = [
  {
    title: "Hummer",
    heading: "Our Cycles",
    price: "200",
    image: "/hum2.png",
    description:" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    productdes:
      "It is a long established fact that a reader will be distracted bythe readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normaldistribution of letters",
  },

  {
    title: "Chimano",
    heading: "",
    price: "206",
    image: "/kid3.png",
    description:
      "",
    productdes:
      "It is a long established fact that a reader will be distracted bythe readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normaldistribution of letters",
  },

  {
    title: "ferrarri",
    heading: "",
    price: "340",
    image: "/img5.png",
    description: "",
    productdes:
      "It is a long established fact that a reader will be distracted bythe readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normaldistribution of letters",
  },

  {
    title: "Fuji",
    heading: "",
    price: "220",
    image: "/img4.png",
    description:"",
    productdes:
      "It is a long established fact that a reader will be distracted bythe readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normaldistribution of letters",
  },
];

const Home  = () => {

  return (
    <>
      <Header />
      <Slider />
      {
        products.map((product, index) => (
          <Productcard
            key={index}
            title={product.title}
            heading={product.heading}
            price={product.price}
            image={product.image}
            description={product.description}
            productdes={product.productdes}
          />
        ))
      }
    
      {/* content-container*/}

          
     <Footer/>
    </>
  );
}


export default Home 