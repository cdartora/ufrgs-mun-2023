import { List } from "phosphor-react";
import { useState } from "react";
import "./header.css";

export default function BurguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={toggleIsOpen}>
        "laravel/homestead": "^14.3",
        <List size={32} className="text-lightTone" weight="bold" />
      </div>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="flex flex-col">
          <li>
            <a href="#" className="text-black">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="text-black">
              Parceiros
            </a>
          </li>
          <li>
            <a href="#" className="text-black">
              Conferência
            </a>
          </li>
          <li>
            <a href="#" className="text-black">
              Enomum
            </a>
          </li>
          <li>
            <a href="#" className="text-black">
              Comitês
            </a>
          </li>
          <li>
            <a href="#" className="text-black">
              Preparação
            </a>
          </li>
          <li>
            <a href="#" className="text-black">
              Inscrições
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
