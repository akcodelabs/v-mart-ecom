import "./App.css";
import AboutPage from "./Componets/AboutPage";
import Newsletter from "./Componets/Newsletter";
import Fotter from "./Componets/Fotter";
import ProductCardList from "./Componets/Products";
import Hero from "./Componets/Hero";
import Nav from "./Componets/Nav";
import ContentSection from "./Componets/ContentSection";
import Services from "./Componets/Services";
import ServicesExtension from "./Componets/ServicesExtension";
import { User } from "lucide-react";
import UserHeader from "./Componets/UserHeadder";
function App() {
  return (
    <div className="App">
      <UserHeader/>
      <Nav />
      <Hero />
      <AboutPage />
      <ProductCardList />
      <ContentSection />
      <Services />
      <ServicesExtension />
      <Newsletter />
      <Fotter />
      
    </div>
  );
}
export default App;
