import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { HashLink } from 'react-router-hash-link';

const Menu = [
  {
    id: 1,
    name: "Home",
    to: "/#hero",
  },
  {
    id: 2,
    name: "Produk",
    to: "/#product",
  },
  {
    id: 3,
    name: "Top Rated",
    to: "/#top",
  },
  {
    id: 3,
    name: "Lokasi",
    to: "/#lokasi",
  },
  {
    id: 3,
    name: "Testimoni",
    to: "/#testimoni",
  },
  {
    id: 3,
    name: "Contact",
    to: "/#about",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-base sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              <p className="pt-2 sm:pt-0">Saddam Drum Band</p>
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full items-center gap-3 group hidden sm:flex"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
      <ul className="sm:flex hidden items-center gap-4">
        {Menu.map((data) => (
          <li key={data.id}>
            <HashLink
              to={data.to}
              className="inline-block px-4 hover:text-primary duration-200"
            >
              {data.name}
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
