import React, { useState } from "react";
import Img1 from "../../assets/shirt/shirt4.png";
import Img2 from "../../assets/shirt/shirt5.png";
import Img3 from "../../assets/shirt/shirt6.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  { id: 1, img: Img1, title: "Crimson Fury", description: "Baju drumband dari Saddam Drum Band dibuat dari bahan yang ringan dan nyaman dipakai. Desainnya mendukung gerakan bebas, sehingga pemain tetap leluasa saat tampil. Selain itu, kainnya menyerap keringat dengan baik, menjaga kesejukan meski digunakan dalam waktu lama." },
  { id: 2, img: Img2, title: "Solar Flare", description: "Baju drumband kami didesain dengan bahan lembut, ringan, dan breathable, memastikan kenyamanan maksimal sepanjang pertunjukan. Dengan potongan ergonomis dan daya serap keringat yang baik, pemain bisa bergerak bebas, tetap sejuk, dan tampil percaya diri di atas panggung!" },
  { id: 3, img: Img3, title: "Sky Guardians", description: "Sky Guardian dirancang untuk kenyamanan dan performa terbaik di setiap pertunjukan. Dibuat dari bahan premium dengan jahitan rapi, baju ini terasa ringan dan breathable, memastikan kebebasan bergerak tanpa hambatan. Tampil maksimal, tetap sejuk, dan penuh percaya diri di atas panggung!" }
];

const TopProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowPopup = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div id="top" className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p className="text-sm text-primary">Produk Nilai Tertinggi untuk Anda</p>
          <h1 className="text-3xl font-bold">Produk Terbaik Kami</h1>
          <p className="text-xs text-gray-400">Saddam Drum Band menghadirkan koleksi terbaik dari kostum hingga aksesori drumband dengan kualitas premium. <br /> Setiap produk dirancang dengan detail dan bahan berkualitas untuk memberikan kenyamanan serta tampilan profesional bagi tim drumband Anda.</p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* Image */}
              <div className="h-[100px]">
                <img src={data.img} alt={data.title} className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" />
              </div>
              
              {/* Details */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  {[...Array(4)].map((_, i) => <FaStar key={i} className="text-yellow-500" />)}
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p>{data.description.split(" ").slice(0, 8).join(" ")}{data.description.split("").length > 100 && "..."}</p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => handleShowPopup(data)}
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md text-center relative">
            <button onClick={handleClosePopup} className="absolute top-2 right-2 text-gray-500">✖</button>
            <img src={selectedProduct.img} alt={selectedProduct.title} className="w-40 mx-auto mb-4" />
            <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
            <p className="text-gray-500 dark:text-gray-300">{selectedProduct.description}</p>
            <button onClick={handleClosePopup} className=" bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary mr-1">Kembali</button>
            <a href="https://api.whatsapp.com/send/?phone=6285540511549&text=Halo%2C%20saya%20tertarik%20untuk%20berbicara%20lebih%20lanjut%20terkait%20perlengkapan%20baju%20drum%20band%21" className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary ml-1">Pesan Sekarang</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopProducts;
