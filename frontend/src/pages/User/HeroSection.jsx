// import React from "react";
// import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

// const HeroSection = () => {
//   const details = [
//     {
//       id: 1,
//       title: "1,23,441",
//       subTitle: "Live Job",
//       icon: <FaSuitcase />,
//     },
//     {
//       id: 2,
//       title: "91220",
//       subTitle: "Companies",
//       icon: <FaBuilding />,
//     },
//     {
//       id: 3,
//       title: "2,34,200",
//       subTitle: "Job Seekers",
//       icon: <FaUsers />,
//     },
//     {
//       id: 4,
//       title: "1,03,761",
//       subTitle: "Employers",
//       icon: <FaUserPlus />,
//     },
//   ];
//   return (
//     <>
//       <div className="heroSection">
//         <div className="container">
//           <div className="title">
//             <h1>Find a job that suits</h1>
//             <h1>your interests and skills</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
//               voluptate repellat modi quidem aliquid eaque ducimus ipsa et,
//               facere mollitia!
//             </p>
//           </div>
//           <div className="image">
//             <img src="/heroS.jpg" alt="hero" />
//           </div>
//         </div>
//         {/* <div className="details">
//           {details.map((element) => {
//             return (
//               <div className="card" key={element.id}>
//                 <div className="icon">{element.icon}</div>
//                 <div className="content">
//                   <p>{element.title}</p>
//                   <p>{element.subTitle}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default HeroSection;


import React from "react";
import Image1 from "../../../public/b1.png";
import Image2 from "../../../public/b2.png";
import Image3 from "../../../public/b3.png";
import Image4 from "../../../public/p6.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Exclusive Offer on Mac Products!",
    description:
    "Discover our exclusive Mac offer! Save up to 20% on the latest MacBook, iMac, and Mac Mini models. This limited-time deal comes with free shipping, making it the perfect opportunity to upgrade your tech. Don't miss out – click 'Shop Now' to take advantage of these unbeatable savings!",
  },
  {
    id: 2,
    img: Image2,
    title: "Exclusive iPhone Savings!",
    description:
    "Unlock incredible savings on the latest iPhones! Enjoy up to 20% off on the newest models, plus free shipping. Upgrade to the best in mobile technology with this limited-time offer. Don't wait – click 'Shop Now' to seize these amazing deals!",
  },
  {
    id: 3,
    img: Image3,
    title: "Unbeatable Deals on Top TVs!",
    description:
    "Experience the ultimate in home entertainment with our exclusive TV offers! Save up to 25% on the latest models from top brands, plus enjoy free shipping. Transform your viewing experience with this limited-time deal. Don't miss out – click 'Shop Now' to get these fantastic savings!",
  },
];

const HeroSection = ({ handleOrderPopup }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };


  

  return (

    
    <div className="relative overflow-hidden min-h-[550px] mt-0  sm:min-h-[900px]  flex justify-center items-center absolute top-0 left-0 right-0 "
    
    style={{
      // backgroundImage: `url('${Image4}')`, 
      // Replace with your actual image path
      // backgroundColor:'black',
      // backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 1.2
    }}
    
    >
      {/* background pattern */}
      <div className="h-[1400px] w-[1400px] mr-[900px] mt-[200px]  bg-gradient-to-r from-violet-700 to-violet-60 absolute -top-1/2 right-0 rounded-[270px] rotate-45 -z[8]"></div>
      <div className="h-[1000px] w-[1000px] mr-[0px] mt-[1300px] ml-[1600px]  bg-gradient-to-l from-violet-400 to-violet-60 absolute -top-1/2 right-0 rounded-[200px] rotate-45 -z[8]"></div>
      {/* <div className="h-[700px] w-[700px] bg-gray-300 absolute  -buttom-1/2 top-[400px]  -left-32 rounded-3xl rotate-45 z[8]"></div> 
       <div className="h-[500px] w-[500px] bg-gray-200 absolute  top-[550px]  mr-[300px] mb-[200px] right-0 -buttom-3 rounded-3xl rotate-45 z[8]"></div> */}
      

       


      {/* hero section */}
      <div className="container sm:pb-0 mt-0  ">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={ImageList.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
               
                <div className="flex flex-col justify-center gap-4  sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-9xl pl-16 font-bold  "
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm font-bold pl-16 mt-5 "
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                   
                    <button
                      onClick={handleOrderPopup}
                      className=" pl-16 from-primary to-secondary hover:scale-105 duration-200  py-2 px-4 rounded-full  mt-6"
                    >
                      Explore Now
                    </button>
                  </div>
                </div>
                
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10 min-h-[500px]"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[600px] h-[600px]  mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
  );
};

export default HeroSection;

