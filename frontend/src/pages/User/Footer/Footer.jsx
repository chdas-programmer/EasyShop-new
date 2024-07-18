import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const About = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
  
];

const support = [
  {
    title: "Talk to us",
    link: "/#talk-to-us",
  },
  {
    title: "FAQ",
    link: "/#faq",
  },
  {
    title: "Help Center",
    link: "/#help-center",
  },
  {
    title: "Privacy Policy",
    link: "/#privacy-policy",
  },
];



const Footer = () => {
  return (
    <div  className="text-black font-bold bg-violet-200 h-[500px] pl-64 ">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pr-5 mr-5 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img   alt="" className="max-w-[50px]" />
              EasyShop
            </h1>
            <p>
             Explore a curated selection of products, from cutting-edge electronics to stylish home decor, all at competitive prices. With fast shipping, secure checkout, and dedicated customer support, shopping with us is convenient and reliable. Start your journey to discovering quality and value today!
              
            </p>
            
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  About us
                </h1>
                <ul className="flex flex-col gap-3">
                  {About.map((link) => (
                    <li
                      className="cursor-pointer  hover:translate-x-1 duration-300 text-black"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold  sm:text-left text-justify mb-3">
                  Support
                </h1>
                <ul className="flex flex-col gap-3">
                  {support.map((link) => (
                    <li
                      className="cursor-pointer  hover:translate-x-2 duration-300 "
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-black" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-black" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-black" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>West Bengal,India</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p >+91 1111111111</p>
                </div>
                

              </div>
            </div>

            <h1 className="mt-20 ml-20 cursor-pointer hover:underline">All Copyright © 2024 Reserved</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
