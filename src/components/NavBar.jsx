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
    <nav className="flex sticky top-0 left-0 w-full z-40 bg-brand-dark gradient shadow-xl">
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

            <div className="absolute top-[69px] bg-brand-dark w-full right-0">
              <MenuItem
                label="Início"
                mobile={true}
                closeMenu={toggleMenu}
                href="/"
              />
              <MenuItem
                label="Sobre nós"
                mobile={true}
                closeMenu={toggleMenu}
                href="/about"
              />
              <MenuItem
                label="Parceiros"
                mobile={true}
                closeMenu={toggleMenu}
                href="/partners"
              />
              <MenuItem
                label="Conferência"
                mobile={true}
                closeMenu={toggleMenu}
                href="/conference"
              />
              <MenuItem label="Comitês" mobile={true} closeMenu={toggleMenu} />
              <MenuItem
                label="Inscrições"
                mobile={true}
                closeMenu={toggleMenu}
                href="/apply"
              />
              <MenuItem
                label="Preparação"
                mobile={true}
                closeMenu={toggleMenu}
                href="/prepare"
              />
              <MenuItem
                label="Enomum"
                href="/enomum"
                mobile={true}
                closeMenu={toggleMenu}
              />
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
        <MenuItem label="Início" href="/" />
        <MenuItem label="Sobre nós" href="/about" />
        <MenuItem label="Parceiros" href="/partners" />
        <MenuItem label="Conferência" href="/conference" />
        <MenuItem label="Comitês" href="/committees" />
        <MenuItem label="Inscrições" href="/apply" />
        <MenuItem label="Preparação" href="/prepare" />
        <MenuItem label="Enomum" href="/enomum" />
      </div>
    </nav>
  );
}
