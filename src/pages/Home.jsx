import React from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
