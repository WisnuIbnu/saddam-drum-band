import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import waLogo from "./assets/website/wa.png";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
  <>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
    <div
        className="fixed bottom-5 right-5 p-3 z-50 flex items-center gap-2 "
        style={{ left: "initial" }}
      >
        <a
          href="https://api.whatsapp.com/send/?phone=6285540511549&text=Halo%2C%20saya%20tertarik%20untuk%20berbicara%20lebih%20lanjut%20terkait%20perlengkapan%20baju%20drum%20band%21"
          className="flex items-center gap-2"
        >
          <span className="text-base sm:text-base text-white bg-green-500 dark:text-green-500 dark:bg-white p-2 font-semibold rounded-3xl">Contact Us</span>
          <img src={waLogo} className="w-16 sm:w-16 animate-scale-up-down" alt="WhatsApp" />
        </a>
      </div>
  </>
  );
};


export default App;
