import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div id="lokasi"
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
           Kunjungi Lokasi Kami
          </h1>
          {/* Google Maps */}
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              className="h-[300px] lg:h-[450px] rounded-2xl shadow-2xl shadow-slate-900"
              src="https://maps.google.com/maps?q=Saddam%20Drum%20Band&z=15&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
