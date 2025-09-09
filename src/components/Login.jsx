import React, { useState } from "react";
import { X } from "lucide-react";

const LoginPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    number: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleLoginClick = () => {
    console.log("Navigate to login");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-7xl max-h-[95vh] overflow-y-auto bg-[#FFFBEB] rounded-3xl shadow-2xl border-2 border-[#D97706] flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
        >
          <X size={28} />
        </button>

        <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col items-center order-1">
          <div className="text-center mb-6">
            <h1 className="font-inter text-3xl lg:text-4xl font-bold text-[#703102] mb-2 leading-tight">
              Experience the Essence of Purity
            </h1>
            <p className="font-inter font-medium text-[15px] text-[#AE5D01] leading-relaxed">
              Join our community to enjoy exclusive offers and the finest cold &
              wood pressed oils delivered to your doorstep.
            </p>
          </div>

          <div className="mb-8 w-full max-w-[462px] rounded-[10px] overflow-hidden shadow-lg">
            <img
              src="/signup.png"
              alt="Premium Oil Products"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-3 w-full max-w-[462px]">
            {/* Feature items... */}
             <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#AE5D01] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-inter font-medium text-lg text-[#703102]">
                100% Pure & Natural
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#AE5D01] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-inter font-medium text-lg text-[#703102]">
                Premium Quality Guaranteed
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#AE5D01] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-inter font-medium text-lg text-[#703102]">
                Free Shipping on Orders Above ₹999
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white lg:bg-white lg:bg-opacity-50 order-2">
          <div className="text-left mb-8">
            <h2 className="font-inter font-medium text-xl text-[#AE5D01] leading-none mb-2">
              Welcome back
            </h2>
            <h3 className="font-inter font-bold text-3xl lg:text-4xl text-amber-900 leading-none">
              Log in to your Account
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form inputs... */}
            <div className="relative">
              <label className="absolute left-2 -top-3 bg-white px-1 text-sm font-medium text-[#703102]">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                className="w-full px-4 py-4 border-2 border-[#703102] rounded-lg focus:outline-none focus:border-[#AE5D01] bg-white text-[#595959] text-lg text-center"
                required
              />
            </div>

            <div className="relative">
              <label className="absolute left-2 -top-3 bg-white px-1 text-sm font-medium text-[#703102]">
                Password
              </label>
              <input
                type="number"
                name="Password"
                value={formData.number}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full px-4 py-4 border-2 border-[#703102] rounded-lg focus:outline-none focus:border-[#AE5D01] bg-white text-[#595959] text-lg text-center"
                required
              />
            </div>

            <div className="text-right -mt-5">
            <button
              onClick={handleLoginClick}
              className="text-[#595959] font-semibold hover:text-amber-800 cursor-pointer transition-colors "
            >
              Forget password?
            </button>
          </div>

            <button
              type="submit"
              className="w-full bg-[#703102] hover:bg-amber-800 text-white cursor-pointer font-semibold py-4 rounded-lg transition-colors text-lg shadow-lg"
            >
              Continue
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="text-[#595959]">Don’t have an account? </span>
            <button
              onClick={handleLoginClick}
              className="text-[#AE5D01] font-semibold hover:text-amber-800 cursor-pointer transition-colors border-b-2 border-[#AE5D01] hover:border-amber-800"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;