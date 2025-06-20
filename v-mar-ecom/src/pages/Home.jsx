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
import Cart from "../components/user/Cart";
import Footer from "../components/user/Footer";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <UserHeader />
      <ContentSection />
      <Services />
      <BestSeller />
      <ServicesExtension />
      <Cart />
      <ProductCardList />
      <AboutPage />
      <Newsletter />
      <ContactForm />
      <Fotter />
      <Footer />
    </>
  );
};

export default Home;
