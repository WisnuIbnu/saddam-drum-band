import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Saddam Drum Band</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-4">
              <p className="text-gray-500 text-center dark:text-gray-300">Untuk Informasi Pemesanan, Hubungi Nomor di Bawah Ini ⬇️📞</p>
                <div className="flex justify-center mt-2">
                  <a href="https://api.whatsapp.com/send/?phone=6285540511549&text=Halo%2C%20saya%20tertarik%20untuk%20berbicara%20lebih%20lanjut%20terkait%20perlengkapan%20baju%20drum%20band%21" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
