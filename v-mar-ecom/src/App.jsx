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
import Products from "./components/Products";
import router from "./Components/router";
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
