import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { HashLink } from 'react-router-hash-link';
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    to: "/#hero",
  },
  {
    title: "Product",
    to: "/#product",
  },
  {
    title: "Top Rated",
    to: "/#top",
  },
  {
    title: "Contact",
    to: "/#about",
  },
];

const Footer = () => {
  return (
    <div id="about" style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Saddam Drum Band
            </h1>
            <p>
            Saddam Drum Band menyediakan kostum dan aksesori drum band berkualitas untuk tampilan marching band yang profesional dan menarik. 🥁🎺🎷
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <HashLink
                        to={link.to} // Menggunakan HashLink untuk navigasi internal
                        className="text-gray-200"
                      >
                        {link.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <HashLink
                        to={link.to} // Menggunakan HashLink untuk navigasi internal
                        className="text-gray-200"
                      >
                        {link.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/accounts/login/?next=%2Fsaddam_bulu_topi_drumband%2F&source=omni_redirect"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=6285540511549&text=Halo%2C%20saya%20tertarik%20untuk%20berbicara%20lebih%20lanjut%20terkait%20perlengkapan%20baju%20drum%20band%21"><FaWhatsapp className="text-3xl" /></a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <a href="https://maps.app.goo.gl/CQWBmHChC3UGA1BV7">Ngemplak, Klaten Selatan, Klaten</a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <a href="https://api.whatsapp.com/send/?phone=6285540511549&text=Halo%2C%20saya%20tertarik%20untuk%20berbicara%20lebih%20lanjut%20terkait%20perlengkapan%20baju%20drum%20band%21">085540511549</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
