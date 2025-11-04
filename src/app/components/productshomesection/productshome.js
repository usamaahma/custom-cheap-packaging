"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductHomePage = () => {
  const data = [
    {
      category: "BOX BY INDUSTRY",
      products: [
        { name: "ALMONDS BOXES" },
        { name: "BAKING SODA PACKAGING" },
        { name: "APRICOT PACKAGING" },
        { name: "BREAD PACKAGING UAE" },
        { name: "CARDBOARD BOXES" },
        { name: "KRAFT BOXES" },
        { name: "CORRUGATED BOXES" },
        { name: "RIGID BOXES" },
      ],
    },
    {
      category: "BOX BY STYLE",
      products: [
        { name: "PILLOW BOX" },
        { name: "TRAY AND SLEEVE" },
        { name: "DOUBLE WALL TUCK FRONT" },
        { name: "GABLE BAG AUTO BOTTOM" },
        { name: "CARDBOARD BOXES" },
        { name: "KRAFT BOXES" },
        { name: "CORRUGATED BOXES" },
        { name: "RIGID BOXES" },
      ],
    },
    {
      category: "BOX BY MATERIAL",
      products: [
        { name: "CARDBOARD BOXES" },
        { name: "KRAFT BOXES" },
        { name: "CORRUGATED BOXES" },
        { name: "RIGID BOXES" },
        { name: "CARDBOARD BOXES" },
        { name: "KRAFT BOXES" },
        { name: "CORRUGATED BOXES" },
        { name: "RIGID BOXES" },
      ],
    },
  ];

  const defaultImage =
    "https://soapboxeswholesale.com/wp-content/uploads/2025/09/Soap-Boxes-Styles-600x600.jpg";

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-12 bg-white">
      {data.map((section, i) => (
        <div key={i} className="mb-20 relative">
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="text-[20px] font-bold text-[#8A00C3] uppercase relative inline-block tracking-wide">
              {section.category}
              <span className="block w-10 h-[2px] bg-[#8A00C3] mx-auto mt-2"></span>
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 text-[#8A00C3] text-xs">
                ✿
              </span>
            </h2>
          </div>

          {/* Slider */}
          <div className="relative px-4">
            <Slider {...settings}>
              {section.products.map((product, idx) => (
                <div key={idx} className="px-2">
                  <div className="bg-white border border-[#470065]/20 rounded-md overflow-hidden text-center hover:shadow-lg hover:border-[#8A00C3]/50 transition-all duration-300">
                    <div className="bg-white flex items-center justify-center h-[220px]">
                      <img
                        src={defaultImage}
                        alt={product.name}
                        className="max-h-[200px] object-contain"
                      />
                    </div>
                    <div className="p-3">
                      <span className="inline-block text-xs font-semibold text-[#470065] border border-[#470065] px-3 py-1 rounded-sm uppercase tracking-tight hover:bg-[#8A00C3] hover:text-white hover:border-[#8A00C3] transition-all duration-200">
                        {product.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* View All Button */}
          <div className="text-center mt-6">
            <button className="border border-[#8A00C3] text-[#8A00C3] text-[13px] font-medium uppercase px-6 py-1.5 rounded-sm hover:bg-[#8A00C3] hover:text-white transition-all duration-200">
              View All
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductHomePage;
