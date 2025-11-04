import React from "react";

function Header1() {
  return (
    <header className="flex justify-end items-center px-10 py-4 bg-[#470065] shadow-md">
      <nav className="flex gap-6 text-white text-sm font-medium">
        <a
          href="#"
          className="px-3 border-r border-white/30 last:border-none hover:text-white transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="px-3 border-r border-white/30 last:border-none hover:text-white transition-colors"
        >
          Blog
        </a>
        <a
          href="#"
          className="px-3 border-r border-white/30 last:border-none hover:text-white transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="px-3 last:border-none hover:text-white transition-colors"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}

export default Header1;
