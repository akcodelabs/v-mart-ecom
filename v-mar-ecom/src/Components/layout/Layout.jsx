import Nav from "../components/Nav";
import Fotter from "../components/Fotter";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Fotter />
    </>
  );
}

export default Layout;
