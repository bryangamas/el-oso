import "../styles/components/Layout.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="Container">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
