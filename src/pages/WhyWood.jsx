import React from 'react';

const WhyWoodPressedOilsPage = () => {
  // Data for the benefits cards, assuming icons are in the public/icons/ directory
  const benefitsData = [
    { icon: '/icons/icon1.png', text: 'Extracted on wood churner' },
    { icon: '/icons/icon2.png', text: '100% natural' },
    { icon: '/icons/icon3.png', text: 'Extracted on wood churner' },
    { icon: '/icons/icon4.png', text: 'Extracted on wood churner' },
    { icon: '/icons/icon5.png', text: 'Preservative Free' },
    { icon: '/icons/icon6.png', text: 'Preservative Free' },
    { icon: '/icons/icon7.png', text: 'Preservative Free' },
  ];

  return (
    <div
      className="bg-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/backgroundLines.png)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-4 text-left">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="font-semibold text-gray-700">Why Cold Pressed?</span>
          </nav>
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#703102] mb-4">
            Why Choose Wood-Pressed Oils?
          </h1>
          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
            Discover the natural, nutrient-rich, and eco-friendly alternative to refined oils for a healthier heart.
          </p>
        </div>

        {/* Comparison Image Section */}
        <div className="flex justify-center px-2 sm:px-4 mb-16 sm:mb-20">
          <img
            src="/why.png" // The main comparison image
            alt="Comparison between refined and wood-pressed oils"
            className="max-w-6xl h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Benefits Section */}
        <div className="text-center">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#703102] mb-4 relative inline-block">
            Benefits of Wood Pressed Oils
            {/* Decorative Underline */}
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-2/3 h-[2px] bg-[#E5C68A]"></span>
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 mt-12">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#FFF9F0] border border-[#AE5D01] rounded-xl p-4 flex flex-col items-center justify-center text-center aspect-square"
              >
                <img
                  src={benefit.icon}
                  alt={benefit.text}
                  className="h-10 sm:h-12 mb-3"
                />
                <p className="text-sm font-semibold text-[#5A3A22]">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWoodPressedOilsPage;
