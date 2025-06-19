import "./App.css";
import AboutPage from "./Componets/AboutPage";
import Newsletter from "./Componets/Newsletter";
import UserLogin from "./components/User";
import Fotter from "./Componets/Fotter";
import ProductCardList from "./Componets/Products";

function App() {
  return (
    <div className="App">
      <AboutPage />
      <ProductCardList />
      <Newsletter />
      <Fotter />
    </div>
  );
}
export default App;
