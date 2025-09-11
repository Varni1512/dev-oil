import React from 'react';

// SVG icon for the product placeholder
const ProductIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className="text-amber-800">
    <path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-48 96a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16v-29.32l10.34 10.35a8 8 0 0 0 11.32-11.32l-24-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 11.32 11.32L72 106.68V136a32 32 0 0 0 32 32h48a32 32 0 0 0 32-32v-24h-16Z" />
  </svg>
);


function Order() {
  return (
    // Main container with a subtle background pattern
    <div
      className="min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url("/backgroundLines.png")`,
      }}
    >
      {/* Main content card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200/80 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 font-inter overflow-hidden ">

        {/* Left Section: Purchase Details */}
        <div className="col-span-1 lg:col-span-3 p-8 sm:p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#703102] mb-4 font-inter">
            Thank you for your purchase!
          </h1>
          <p className="text-[#595959] mb-6 text-base leading-relaxed">
            Your order will be packed within 24 hours (1 working day). We will notify you by email once your order has been shipped.
          </p>

          <h2 className="text-xl font-semibold text-[#703102] mb-4 border-b pb-2">
            Billing address
          </h2>
          <div className="text-gray-700 space-y-3 text-base whitespace-nowrap">
            <p><strong>Name:</strong> Aman Singh</p>
            <p><strong>Address:</strong> 12/A, Linking Road, Bandra West, Mumbai, Maharashtra 400050, India</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> aman.singh@gmail.com</p>
          </div>

          <button className="mt-6 bg-[#703102] text-white font-semibold py-3 px-8 rounded-full cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6b4f4b] transition-all duration-300 transform hover:scale-105">
            Track your order
          </button>
        </div>

        {/* Right Section: Order Summary */}
        <div className="col-span-1 lg:col-span-2 p-8 sm:p-10  flex flex-col justify-center">
          <div className="bg-[#703102] text-white p-6 sm:p-8 rounded-xl shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-amber-50 mt-6">Order Summary</h2>
            <div className="border-t border-white/20 my-2"></div>
            {/* Product Item */}
            <div className="flex items-center justify-between mb-6 mt-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-xl flex items-center justify-center">
                  <img
                    src="/oil.png"
                    alt="Mustard Oil Bottle"
                    className="w-14 h-14 object-contain rounded-lg"
                  />
                </div>

                <div>
                  <p className="font-semibold text-white">Mustard Oil</p>
                  <p className="text-sm text-gray-300">500ml Bottle</p>
                </div>
              </div>
              <p className="font-semibold text-white">₹1250.00</p>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 text-gray-200">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹1250.00</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between ">
                <p>Coupon Discount</p>
                <p className='text-green-300'>–₹187.50</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 my-6"></div>

            {/* Grand Total */}
            <div className="flex justify-between items-center text-xl font-bold text-amber-50">
              <p>Total Amount</p>
              <p>₹1062.50</p>
            </div>
          </div>

          {/* Order Meta */}
          <div className="mt-2 text-sm text-gray-700 space-y-2 text-left sm:text-left">
            <p><strong>Order Number:</strong> 123-4567890</p>
            <p><strong>Payment Method:</strong> Master Card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
