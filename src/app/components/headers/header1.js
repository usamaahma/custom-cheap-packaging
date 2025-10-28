import React from "react";

function Header1() {
  return (
    <header className="flex justify-end items-center px-10 py-4 bg-[#f9f9f9] border-b border-gray-200">
      <nav className="flex gap-6 text-black text-sm font-medium">
        <a
          href="#"
          className="px-3 border-r border-gray-300 last:border-none hover:text-gray-600 transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="px-3 border-r border-gray-300 last:border-none hover:text-gray-600 transition-colors"
        >
          Blog
        </a>
        <a
          href="#"
          className="px-3 border-r border-gray-300 last:border-none hover:text-gray-600 transition-colors"
        >
          Privacy Policy{" "}
        </a>
        <a
          href="#"
          className="px-3 last:border-none hover:text-gray-600 transition-colors"
        >
          Contact Us{" "}
        </a>
      </nav>
    </header>
  );
}

export default Header1;
