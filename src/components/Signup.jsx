import React, { useState } from "react";
import { X, ChevronLeft } from "lucide-react";
import OtpPopup from "./OTP";
import SOtpPopup from "./Sotp";

const SignupPopup = ({ isOpen, onClose, onLogin }) => {
  const [isSotpPopupOpen, setIsSotpPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.email.trim() !== "";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return; 

    console.log("Form submitted:", formData);
    setIsSotpPopupOpen(true); 
  };

  const closeSotpPopup = () => {
    setIsSotpPopupOpen(false);
  };

  const handleLoginClick = () => {
    onLogin && onLogin();
  };


  const handleGoBack = () => {
    // Navigate to the previous page in browser history
    window.history.back();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Popup Content */}
      <div className="relative w-full max-w-7xl max-h-[95vh] overflow-y-auto bg-[#FFFBEB] rounded-3xl shadow-2xl border-2 border-[#D97706] flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 cursor-pointer  text-gray-500 hover:text-gray-700"
        >
          <X size={28} />
        </button>
        
        {/* Left Side (Image and Features) */}
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

        {/* Right Side (Form) */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white lg:bg-opacity-50 order-2">
          <div className="text-left mb-8">
            <h2 className="font-inter font-medium text-xl text-[#AE5D01] leading-none mb-2">
              Let's get started
            </h2>
            <h3 className="font-inter font-bold text-3xl lg:text-4xl text-amber-900 leading-none">
              Create an Account
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form inputs... (no changes needed here) */}
            <div className="relative">
              <label className="absolute left-2 -top-3 bg-white px-1 text-sm font-medium text-[#703102]">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full px-4 py-4 border-2 border-[#703102] rounded-lg focus:outline-none focus:border-[#AE5D01] bg-white text-[#595959] text-lg text-center"
                required
              />
            </div>

            <div className="relative">
              <label className="absolute left-2 -top-3 bg-white px-1 text-sm font-medium text-[#703102]">
                Phone no
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone no"
                className="w-full px-4 py-4 border-2 border-[#703102] rounded-lg focus:outline-none focus:border-[#AE5D01] bg-white text-[#595959] text-lg text-center"
                required
              />
            </div>

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

            {/* UPDATED: The button is now disabled based on `isFormValid` */}
            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-[#703102] hover:bg-amber-800 text-white cursor-pointer font-semibold py-4 rounded-lg transition-colors text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="text-[#595959]">Already have an account? </span>
           <button
           
              onClick={handleLoginClick} // UPDATED to open login popup
              className="text-[#AE5D01] font-semibold hover:text-amber-800 cursor-pointer transition-colors border-b-2 border-[#AE5D01] hover:border-amber-800"
            >
              Log in
            </button>
          </div>

          <div className="flex justify-start mt-6 md:mt-20">
            {/* <button
              onClick={handleGoBack}
              className="inline-flex items-center text-[#703102] cursor-pointer px-4 py-2 border border-[#AE5D01] rounded-full hover:bg-orange-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Go back
            </button> */}
          </div>
        </div>
      </div>
      
      <SOtpPopup
        isOpen={isSotpPopupOpen}
        onClose={closeSotpPopup}
      />
    </div>
  );
};

export default SignupPopup;