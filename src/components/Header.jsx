import Nav from "./Nav";
import BurguerMenu from "./BurguerMenu";
import UfrgsMunLogo from "../assets/logo.svg";

export default function Header() {
  const isMobile = window.innerWidth < 768; // Set the breakpoint for mobile devices
  console.log(isMobile);

  return (
    <header className="py-2 px-8 bg-transparent flex justify-between md:justify-around items-center raleway font-light">
      <div className="content">
        <a href="/">
          <img
            src={UfrgsMunLogo}
            alt="UFRGS Mun logo"
            className="h-8 md:h-10"
          />
        </a>
      </div>
      <nav className="content">{isMobile ? <BurguerMenu /> : <Nav />}</nav>
    </header>
  );
}
