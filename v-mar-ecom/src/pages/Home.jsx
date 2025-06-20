import React from "react";
import AboutPage from "../components/AboutPage";
import Newsletter from "../components/Newsletter";
import Fotter from "../components/Fotter";
import ProductCardList from "../components/Products";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import ContentSection from "../components/ContentSection";
import Services from "../components/Services";
import ServicesExtension from "../Components/ServicesExtension";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <ContentSection />
      <ProductCardList />
      <AboutPage />
      <Services />
      <ServicesExtension />
      <Newsletter />
      <Fotter />
    </>
  );
};

export default Home;
