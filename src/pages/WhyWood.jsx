import React from 'react';

const WhyWoodPressedOilsPage = () => {
  // Data for the benefits cards, assuming icons are in the public/icons/ directory
  const benefitsData = [
    { icon: 'icon1.png', text: 'Extracted on wood churner' },
    { icon: 'icon2.png', text: '100% natural' },
    { icon: 'icon3.png', text: 'Extracted on wood churner' },
    { icon: 'icon4.png', text: 'Extracted on wood churner' },
    { icon: 'icon4.png', text: 'Preservative Free' },
    { icon: 'icon5.png', text: 'Preservative Free' },
    { icon: 'icon6.png', text: 'Preservative Free' },
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
          <div className="text-center mb-10 sm:mb-16 mt-10 lg:mt-16">
            <h2 className="font-inter font-bold text-[36px] sm:text-[48px] lg:text-[53.62px] leading-[100%] tracking-[0px] text-center uppercase text-[#703102] mb-4">
              Why Choose Wood-Pressed Oils?
            </h2>

            <p className="font-inter font-medium text-[18px] sm:text-[20px] lg:text-[24px] leading-[100%] tracking-[0px] text-center text-[#595959] max-w-3xl mx-auto">
              Discover the natural, nutrient-rich, and eco-friendly alternative<br /> to refined oils for a healthier heart.
            </p>
          </div>
        </div>

        {/* Comparison Image Section */}
        <div className="flex justify-center px-2 sm:px-4 mb-16 sm:mb-20">
          <img
            src="/why.png"
            alt="Comparison between refined and wood-pressed oils"
            className="w-full max-w-5xl h-auto rounded-lg shadow-lg"
          />
        </div>


        {/* Benefits Section */}
        <div className="text-center">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-4xl font-bold text-[#703102] mb-4 relative inline-block  border-b-2">
            Benefits of Wood Pressed Oils
          </h2>

          {/* Benefits Grid */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-4 mt-8 lg:mt-12 max-w-4xl mx-auto">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="w-[108px] h-[150px] bg-[#FFF4CD] border-2 border-[#703102] rounded-[10px] p-2 flex flex-col items-center justify-center text-center"
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
