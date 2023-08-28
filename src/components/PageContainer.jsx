import NavBar from "./NavBar";
import Footer from "./Footer";

function PageContainer({ children }) {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PageContainer;
