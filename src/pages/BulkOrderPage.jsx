import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import FooterBanner from '../components/FooterBanner';

const BulkOrderPage = () => {
  // A list of states for the dropdown menu
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  // Social media links configuration
  const socialLinks = [
    { icon: <Facebook size={24} className="text-[#703102]" />, href: "#" },
    { icon: <Twitter size={24} className="text-[#703102]" />, href: "#" },
    { icon: <Instagram size={24} className="text-[#703102]" />, href: "#" },
    { icon: <Youtube size={24} className="text-[#703102]" />, href: "#" },
  ];

  return (
    <div
      className="bg-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/backgroundLines.png)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6 text-left max-w-3xl mx-auto">
          <span>Home</span>
          <span className="mx-2">&gt;</span>
          <span className="font-semibold text-gray-700">Bulk order enquiry</span>
        </nav>

        {/* Main Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#703102] mb-4">
            Request a Bulk Order
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            "Fill out the form below and our team will get back to you with the best pricing and details."
          </p>
        </div>

        {/* Enquiry Form Card */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-10 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-8 text-center">
            BULK ORDER ENQUIRY
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name*" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]" />
              <input type="text" placeholder="Phone Number*" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]" />
              <input type="email" placeholder="Email Address*" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]" />
              <select className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]">
                <option>Select State*</option>
                {states.map(state => <option key={state} value={state}>{state}</option>)}
              </select>
              <input type="text" placeholder="Product Name*" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]" />
              <input type="text" placeholder="Company Name" className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]" />
            </div>
            <textarea
              placeholder="Your Message*"
              rows="5"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#703102] text-white font-bold py-3 px-6 rounded-md hover:bg-[#5a2701] transition-colors duration-300"
            >
              Send Enquiry
            </button>
          </form>
        </div>

        {/* Offer Description */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          We offer bulk edible oil orders with special discounts, customization options, and fast priority shipping to meet your business needs.
        </p>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Call Us Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
            <Phone size={32} className="text-[#703102]" />
            <div>
              <h3 className="font-semibold text-gray-700">Call us</h3>
              <p className="font-bold text-gray-900">+919876543210</p>
              <p className="text-sm text-gray-500">Mon-Sat, 9am - 7pm</p>
            </div>
          </div>
          {/* Email Us Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
            <Mail size={32} className="text-[#703102]" />
            <div>
              <h3 className="font-semibold text-gray-700">Email us</h3>
              <p className="font-bold text-gray-900">info@devnaturaloils.com</p>
              <p className="text-sm text-gray-500">We reply within 24 hours</p>
            </div>
          </div>
          {/* Our Address Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4">
            <MapPin size={32} className="text-[#703102]" />
            <div>
              <h3 className="font-semibold text-gray-700">Our Address</h3>
              <p className="font-bold text-gray-900">123 Oil Mill Street</p>
              <p className="text-sm text-gray-500">Mumbai, Maharashtra 400001</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#703102] mb-6">
            Follow our social media
          </h2>
          <div className="flex justify-center items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="bg-[#FCE289] p-3 rounded-md hover:bg-[#fadf70] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <FooterBanner />
    </div>
  );
};

export default BulkOrderPage;
