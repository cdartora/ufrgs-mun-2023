import { useState } from "react";
import { X } from "phosphor-react";
import MenuItem from "./MenuItem";
import menuMobileIcon from "../assets/menu-mobile-icon.svg";
import navLogo from "../assets/nav-logo.svg";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="flex sticky top-0 z-10 bg-brand-dark shadow-lg">
      <div className="flex items-center p-4">
        <img src={navLogo} alt="all white logo" width="140" />
      </div>
      <div className="block lg:hidden ml-auto pr-4 my-auto cursor-pointer transition-all">
        {isMenuOpen ? (
          <>
            <button
              type="button"
              onClick={toggleMenu}
              className="flex  items-center"
            >
              <X size={32} weight="bold" />
            </button>

            <div className="absolute top-[70px] bg-brand-dark w-full right-0">
              <MenuItem label="Início" mobile={true} closeMenu={toggleMenu} />
              <MenuItem
                label="Sobre nós"
                mobile={true}
                closeMenu={toggleMenu}
              />
              <MenuItem
                label="Conferência"
                mobile={true}
                closeMenu={toggleMenu}
              />
              <MenuItem label="Comitês" mobile={true} closeMenu={toggleMenu} />
              <MenuItem
                label="Inscrições"
                mobile={true}
                closeMenu={toggleMenu}
              />
              <MenuItem
                label="Preparação"
                mobile={true}
                closeMenu={toggleMenu}
              />
              <MenuItem label="Enomum" mobile={true} closeMenu={toggleMenu} />
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={toggleMenu}
            className="flex  items-center"
          >
            <img src={menuMobileIcon} alt="all white logo" />
          </button>
        )}
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-end">
        <MenuItem label="Início" />
        <MenuItem label="Sobre nós" />
        <MenuItem label="Conferência" />
        <MenuItem label="Comitês" />
        <MenuItem label="Inscrições" />
        <MenuItem label="Preparação" />
        <MenuItem label="Enomum" />
      </div>
    </nav>
  );
}
