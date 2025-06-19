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

function App() {
  return (
    <div className="App">
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
