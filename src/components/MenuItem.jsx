import { useState } from "react";

export default function MenuItem({ label, mobile, closeMenu, href }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  function toggleSubmenu() {
    setIsSubmenuOpen(!isSubmenuOpen);
    if (!hasSubmenuItems) {
      closeMenu();
    }
  }
  if (mobile) {
    return (
      <>
        <a
          onClick={toggleSubmenu}
          className="flex flex-col p-4 items-center relative cursor-pointer hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out"
          href={href}
        >
          <span>{label}</span>
        </a>
      </>
    );
  }
  return (
    <a
      href={href}
      className="inline whitespace-nowrap group relative h-full p-4 cursor-pointer  text-zinc-100 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out"
    >
      <span>{label}</span>
    </a>
  );
}
