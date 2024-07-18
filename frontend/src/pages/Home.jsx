import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import HeroSection from "./User/HeroSection";
import Banner from "./User/Banner/Banner";
import SpecialProducts from "./User/SpecialProducts";
import Footer from "./User/Footer/Footer";
import ContactUs from "./User/ContactUs";
import SpecialOffer from "./User/SpecialOffer";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>

      <HeroSection/>
      <SpecialProducts/>
      <Banner/>
      <SpecialOffer/>
      <ContactUs/>
     
     
      <Footer/>
    </>
  );
};

export default Home;
