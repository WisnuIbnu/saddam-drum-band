import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.png";
import Img3 from "../../assets/women/women6.png";
import Img4 from "../../assets/women/women4.png";
import Img5 from "../../assets/women/women5.png";
import { FaStar } from "react-icons/fa6";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Sang Garuda",
    rating: 5.0,
    color: "Biru - Emas",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Zebra Lurik",
    rating: 4.5,
    color: "Hijau - Putih",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Sang Merah Putih",
    rating: 4.7,
    color: "Merah - Putih",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Si Elang",
    rating: 4.4,
    color: "Biru Tua - Putih",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Burung Cendrawasih",
    rating: 4.5,
    color: "Putih - Hijau",
    aosDelay: "800",
  },
];

const downloadPdf = () => {
  const pdfUrl = "/catalog.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.setAttribute("download", "Catalog.pdf"); 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Products = () => {
  return (
    <div id="product" className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
          Produk Terlaris untuk Anda
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Produk
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Saddam Drum Band menghadirkan berbagai kostum dan aksesori drumband berkualitas tinggi, 
          dirancang untuk memberikan tampilan yang profesional dan nyaman saat digunakan. 
          Dengan bahan pilihan dan desain eksklusif, produk kami menjadi pilihan utama 
          bagi tim drumband di seluruh Indonesia.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md" 
            onClick={downloadPdf}
            >
              Download Katalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Products;
