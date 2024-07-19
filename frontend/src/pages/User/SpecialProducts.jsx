import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApiSlice";
import Product from "../Products/Product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

import image4 from "../../../public/p2.jpg"


const SpecialProducts = () => {

    const { keyword } = useParams();
    const { data, isLoading, isError } = useGetProductsQuery({ keyword });
    console.log(data);
  return (
    <>
       {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
         <div className='bg-indigo-500 min-h-[500px] pb-16 '
         
         
         style={{
          backgroundImage: `url('${image4}')`, // Replace with your actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1
        }}
         
        
         
         >

{/* <div className="h-[500px] w-[500px] mr-[900px] mt-[20px]  bg-gradient-to-r from-violet-400 to-violet-60 absolute rounded-full"></div> */}
         <div className="flex justify-between items-center   ">
            <h1 className="ml-[20rem] mt-[3rem] text-[3rem] text-gray-300 font-bold">
              Special Products
            </h1>

            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[3rem]"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-[2rem] min-h-[500px] text-gray-200  ">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))
              }
            </div>
          </div>
         </div>
          
          
        </>
        
      )}
    </>
  )
}

export default SpecialProducts