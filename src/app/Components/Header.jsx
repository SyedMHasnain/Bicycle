"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Header = () => {
  const [open, setOpen] = useState(false);

  const data = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Contact", link: "/contact" },
    { name: "Name", link: "/name" },
    { name: "Shop", link: "/shop" },
  ];

  const openNav = () => {
    setOpen(true);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex-1 fixed top-0 left-0 w-full p-5 bg-transparent z-50">
        <div className="flex justify-between">
          <Image src="/logo.png" alt="Logo" height={100} width={100} />
          <div className="flex gap-6">
            <CiMenuFries
              onClick={openNav}
              className="navicon w-10 h-8 p-1 bg-
              rounded-full hover:bg-[#f7c17b]  "
            />
            <div
              id="mySidenav"
              className={`fixed top-0 right-0 h-full bg-black text-white   transition-all duration-300 
              ${open ? "w-64" : "w-0"}`}>
              <IoMdClose
                className="w-10 p-1 rounded-full hover:bg-[#f7c17b] hover:text-black
                ml-2 text-[2vw] mt-5 bg-white text-black"
                onClick={closeNav}
              />

              <div className="mt-5">
                {data.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <h4
                      className="navbar-link cursor-pointer text-lg ml-5
                    p-3 hover:text-[#f7c17b] hover:underline ">
                      {item.name}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
    </>
  );
};

export default Header;
