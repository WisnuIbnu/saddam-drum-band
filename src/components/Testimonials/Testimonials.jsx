
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Andi Pratama",
    text: "Baju drum band dari Saddam Drum Band sangat nyaman dipakai. Bahan yang digunakan berkualitas tinggi, dan desainnya sangat menarik. Cocok untuk penampilan kami di berbagai event. Sangat puas dengan pelayanan dan produk dari Saddam!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Dwi Santosa",
    text: "Saya sudah beberapa kali membeli baju drum band di Saddam, dan hasilnya selalu memuaskan. Baju yang saya beli memiliki ketahanan yang luar biasa dan tetap nyaman meskipun digunakan untuk latihan intens. Recommended banget!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Siti Nurhasanah",
    text: "Baju drum band dari Saddam Drum Band sangat nyaman dipakai. Desain yang stylish dan bahan yang berkualitas memberikan kenyamanan saat tampil. Produk yang tahan lama dan pengiriman yang cepat. Terima kasih, Saddam Drum Band!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Rudi Kurniawan",
    text: "Baju drum band dari Saddam Drum Band sangat nyaman dipakai. Desainnya sangat keren dan bahan yang digunakan sangat berkualitas. Penampilan kami semakin percaya diri dan menarik perhatian. Terima kasih untuk produk yang luar biasa ini!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimoni" className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Apa yang Pelanggan Kami Katakan
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimoni
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Temukan Pengalaman Belanja yang Memukau! Dengan Kualitas Terbaik, Kami Siap Memenuhi Semua Kebutuhan Anda.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-xl w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-start">
                      <p className="text-xs text-gray-500 dark:text-gray-400">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-gray-400">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
