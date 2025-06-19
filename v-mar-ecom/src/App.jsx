import "./App.css";
import AboutPage from "./Componets/AboutPage";
import Newsletter from "./Componets/Newsletter";
import UserLogin from "./components/User";
import Fotter from "./Componets/Fotter";
import ProductCardList from "./Componets/Products";
import Hero from "./Componets/Hero";
import Nav from "./Componets/Nav";
import Services from "./Componets/Services";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <AboutPage />
      <ProductCardList />
      <Services />
      <Newsletter />
      <Fotter />
    </div>
  );
}
export default App;
