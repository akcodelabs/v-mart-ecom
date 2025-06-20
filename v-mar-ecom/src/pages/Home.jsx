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
import BestSeller from "../components/BestSeller";
import UserHeader from "../components/user/UserHeadder";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <UserHeader />
      <ContentSection />
      <ProductCardList />
      <AboutPage />
      <Services />
      <BestSeller />
      <ServicesExtension />
      <Newsletter />
      <Fotter />
    </>
  );
};

export default Home;
