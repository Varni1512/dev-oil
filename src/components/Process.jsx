import React from 'react';

export default function ProcessProducts() {
  const products = [
    {
      id: 1,
      title: "Our Premium Collection",
      subtitle: "Click to view",
      image: "/Blog1.png",
      alt: "Premium oil collection with various bottles"
    },
    {
      id: 2,
      title: "Cold Pressed Process",
      subtitle: "Click to view",
      image: "/Blog2.png",
      alt: "Cold pressed oil extraction machinery"
    },
    {
      id: 3,
      title: "Pure Coconut Oil",
      subtitle: "Click to view",
      image: "/Blog3.png",
      alt: "Pure coconut oil jar with coconut pieces"
    },
    {
      id: 4,
      title: "Traditional Methods",
      subtitle: "Click to view",
      image: "/Blog2.png",
      alt: "Traditional oil bottles with seeds and nuts"
    },
    {
      id: 5,
      title: "Quality Packaging",
      subtitle: "Click to view",
      image: "/Blog1.png",
      alt: "Quality packaged oil products"
    },
    {
      id: 6,
      title: "Artisan Crafted",
      subtitle: "Click to view",
      image: "/Blog3.png",
      alt: "Artisan crafted oil bottles with ingredients"
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-700 mb-4">
            Our Process & Products
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Take a glimpse into our traditional oil extraction methods and premium product range.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative w-full max-w-[506px] aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />

                {/* Permanent Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

                </div>
              </div>


              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 drop-shadow-lg">
                  {product.title}
                </h3>
                <p className="text-sm sm:text-base opacity-90 drop-shadow">
                  {product.subtitle}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Shop Now Button */}
        <div className="text-center">
          <button className="bg-[#703102] hover:bg-amber-900 text-white font-semibold px-8 py-3 sm:px-10 sm:py-4 cursor-pointer rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}