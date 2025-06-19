import "./App.css";
import AboutPage from "./components/AboutPage";
import Newsletter from "./components/Newsletter";
import Fotter from "./components/Fotter";
import ProductCardList from "./components/Products";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ContentSection from "./components/ContentSection";
import Services from "./components/Services";
import ServicesExtension from "./components/ServicesExtension";
import Footer from "./Componets/User/Footer";

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
      <Footer />
    </div>
  );
}
export default App;
