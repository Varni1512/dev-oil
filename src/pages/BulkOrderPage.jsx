import React from 'react';
import {Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumbs */}
        <nav className="text-sm text-[#595959] mb-6 text-left max-w-3xl mx-auto">
          <span>Home</span>
          <span className="mx-2">&gt;</span>
          <span className="font-semibold text-[#703102]">Bulk order enquiry</span>
        </nav>

        {/* Main Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-inter font-bold text-[42px] sm:text-[48px] lg:text-[53.62px] leading-[100%] tracking-[0px] text-center uppercase text-[#703102] mb-4">
            Request a Bulk Order
          </h2>

          <p className="font-inter font-medium text-[18px] sm:text-[20px] lg:text-[24px] leading-[100%] tracking-[0px] text-center text-[#595959] max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you with the best pricing and details.
          </p>
        </div>

        {/* Enquiry Form Card */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-10 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-left">
            BULK ORDER ENQUIRY
            <hr className='mt-3' />
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name*" className="w-full p-3 bg-[#F6F6F6] border border-[#703102] rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]" />
              <input type="text" placeholder="Phone Number*" className="w-full p-3 bg-[#F6F6F6] border border-[#703102] rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]" />
              <input type="email" placeholder="Email Address*" className="w-full p-3 bg-[#F6F6F6] border border-[#703102]rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]" />
              <select className="w-full p-3 bg-[#F6F6F6] border border-[#703102] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]">
                <option>Select State*</option>
                {states.map(state => <option key={state} value={state}>{state}</option>)}
              </select>
              <input type="text" placeholder="Product Name*" className="w-full p-3 bg-[#F6F6F6] border border-[#703102] rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]" />
              <input type="text" placeholder="Company Name" className="w-full p-3 bg-[#F6F6F6] border border-[#703102] rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]" />
            </div>
            <textarea
              placeholder="Your Message*"
              rows="5"
              className="w-full p-3 bg-[#F6F6F6] border border-[#703102] rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#703102] text-white font-bold cursor-pointer py-3 px-6 rounded-md hover:bg-[#5a2701] transition-colors duration-300"
            >
              Send Enquiry
            </button>
          </form>
        </div>

        {/* Offer Description */}
        <p className="text-center text-[#595959] max-w-3xl mx-auto mb-16 font-medium text-[10px] sm:text-[12px] lg:text-[18px]">
          We offer bulk edible oil orders with special discounts, customization options,<br /> and fast priority shipping to meet your business needs.
        </p>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {/* Call Us Card */}
          <div className="w-[360px] h-[136px] bg-white border border-[#703102] rounded-[10px] p-4 flex items-center gap-5 opacity-100">
            <img src="/phone.png" alt="Phone" className="w-8 h-8 object-contain" />
            <div className='space-y-2'>
              <h3 className="font-medium text-[20px] leading-[24px] tracking-[0px] text-[#595959] font-['Inter']">
                Call us
              </h3>
              <p className="font-semibold text-[24px] leading-[24px] tracking-[0px] text-black font-['Inter']">
                +919876543210
              </p>
              <p className="font-medium text-[22px] leading-[20px] tracking-[0px] text-[#595959] font-['Inter']">
                Mon-Sat, 9am - 7pm
              </p>
            </div>
          </div>

          {/* Email Us Card */}
          <div className="w-[360px] h-[136px] bg-white border border-[#703102] rounded-[10px] p-4 flex items-center gap-5 opacity-100">
            <img src="/mail.png" alt="Phone" className="w-8 h-8 object-contain" />
            <div className='space-y-2'>
              <h3 className="font-medium text-[20px] leading-[24px] tracking-[0px] text-[#595959] font-['Inter']">
                Email us
              </h3>
              <p className="font-semibold text-[24px] leading-[24px] tracking-[0px] text-black font-['Inter']">
                info@devnaturaloils.com
              </p>
              <p className="font-medium text-[22px] leading-[20px] tracking-[0px] text-[#595959] font-['Inter']">
                We reply within 24 hours
              </p>
            </div>
          </div>
          {/* Our Address Card */}
          <div className="w-[360px] h-[136px] bg-white border border-[#703102] rounded-[10px] p-4 flex items-center gap-5 opacity-100">
            <img src="/location.png" alt="Phone" className="w-8 h-8 object-contain" />
            <div className='space-y-2'>
              <h3 className="font-medium text-[20px] leading-[24px] tracking-[0px] text-[#595959] font-['Inter']">
                Our Address
              </h3>
              <p className="font-semibold text-[24px] leading-[24px] tracking-[0px] text-black font-['Inter']">
                123 Oil Mill Street
              </p>
              <p className="font-medium text-[18px] leading-[20px] tracking-[0px] text-[#595959] font-['Inter']">
                Mumbai, Maharashtra 400001
              </p>
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
