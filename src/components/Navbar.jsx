import React, { useState } from 'react';
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { LuTwitter, LuYoutube, LuPhone } from 'react-icons/lu';
import { HiMenu, HiX } from 'react-icons/hi';
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginPopup from './Login';
import SignupPopup from './Signup';
import ForgetPopup from './Forget';
import OtpPopup from './OTP';
import CPasswordPopup from './CPassword';
import SOtpPopup from './Sotp';
import PasswordPopup from './Password';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isForgetOpen, setIsForgetOpen] = useState(false);
    const [isOtpOpen, setIsOtpOpen] = useState(false);
    const [isCPasswordOpen, setIsCPasswordOpen] = useState(false);
    const [isSOtpOpen, setIsSOtpOpen] = useState(false);
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMobileLinkClick = () => {
        setIsMenuOpen(false); // Close the menu
    };

    // Open login popup (replaces previous signup popup)
    const openLoginPopup = () => {
        setIsLoginOpen(true);
        setIsMenuOpen(false);
    };

    // Flow handlers
    const closeAllAuthPopups = () => {
        setIsLoginOpen(false);
        setIsSignupOpen(false);
        setIsForgetOpen(false);
        setIsOtpOpen(false);
        setIsCPasswordOpen(false);
        setIsSOtpOpen(false);
        setIsPasswordOpen(false);
    };

    const handleLoginContinue = () => {
        closeAllAuthPopups();
        navigate('/');
    };

    const handleGoToSignup = () => {
        setIsLoginOpen(false);
        setIsSignupOpen(true);
    };

    const handleGoToLogin = () => {
        setIsSignupOpen(false);
        setIsLoginOpen(true);
    };

    const handleGoToForget = () => {
        setIsLoginOpen(false);
        setIsForgetOpen(true);
    };

    const handleForgetContinue = () => {
        setIsForgetOpen(false);
        setIsOtpOpen(true);
    };

    const handleForgetGoBack = () => {
        setIsForgetOpen(false);
        setIsLoginOpen(true);
    };

    const handleOtpGoBack = () => {
        setIsOtpOpen(false);
        setIsForgetOpen(true);
    }

    const handleOtpContinue = () => {
        setIsOtpOpen(false);
        setIsCPasswordOpen(true);
    };

    // New handlers for SOtp and Password flow
    const handleSignupContinue = () => {
        setIsSignupOpen(false);
        setIsSOtpOpen(true);
    };

    const handleSOtpGoBack = () => {
        setIsSOtpOpen(false);
        setIsSignupOpen(true);
    };

    const handleSOtpContinue = () => {
        setIsSOtpOpen(false);
        setIsPasswordOpen(true);
    };

    const handlePasswordGoBack = () => {
        setIsPasswordOpen(false);
        setIsSOtpOpen(true);
    };

    const handlePasswordContinue = () => {
        closeAllAuthPopups();
        navigate('/');
    };

    const handlePasswordClose = () => {
        closeAllAuthPopups();
        navigate('/');
    };

    const handleCpassGoBack = () => {
        setIsCPasswordOpen(false);
        setIsOtpOpen(true);
    }

    const handleCPasswordContinue = () => {
        // After password reset, return to login
        setIsCPasswordOpen(false);
        navigate('/');
    };

    return (
        <div className='bg-white'>
            {/* Top Bar - Contact & Promo - Hidden on Mobile */}
            <header className="hidden lg:flex bg-[#703102] flex-col lg:flex-row justify-between items-center text-white py-3 px-4 lg:px-8 text-sm">
                {/* Contact Info */}
                <div className="items-center gap-2 flex  mb-2 lg:mb-0 order-1 lg:order-1">
                    <FaPhoneAlt className="text-very-light-orange" />
                    <span className="whitespace-nowrap">+91 9876543210</span>
                    <span className='text-[#FCE289]'>|</span>
                    <span className=''>Bulk Order</span>
                </div>

                {/* Promotional Message */}
                <div className="text-center mb-2 lg:mb-0 order-2 lg:order-2 flex-1 lg:flex-none">
                    <p className="text-xs lg:text-sm">
                        ✨ Experience Premium Quality, Delivered Without Extra Cost - Enjoy Free Shipping on Orders Over ₹999! ✨
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="gap-4 order-3 lg:order-3 flex">
                    <FiFacebook className="h-5 w-5 text-[#FFAB4A] hover:text-white transition-colors cursor-pointer" />
                    <LuTwitter className="h-5 w-5 text-[#FFAB4A] hover:text-white transition-colors cursor-pointer" />
                    <FaInstagram className="h-5 w-5 text-[#FFAB4A] hover:text-white transition-colors cursor-pointer" />
                    <LuYoutube className="h-5 w-5 text-[#FFAB4A] hover:text-white transition-colors cursor-pointer" />
                </div>
            </header>

            {/* Main Navigation */}
            <nav className='max-w-7xl mx-auto bg-white h-20 lg:h-20 lg:px-8 py-1 px-2.5'>
                <div className='flex items-center justify-between h-full gap-2.5'>
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/">
                            <img src="/logo.png" alt="Dev Natural Oils Logo" className="h-12 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Navigation Links -- UPDATED SECTION -- */}
                    <div className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
                        <NavLink to='/' className={({ isActive }) => `text-[#703102] font-medium pb-1 transition-colors relative group ${isActive ? "border-b-2 border-[#703102]" : ""}`}>
                            Home
                            {/* Show hover effect only when NOT active */}
                            {({ isActive }) => !isActive && <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#703102] transition-all duration-300 group-hover:w-full'></span>}
                        </NavLink>
                        <NavLink to='/about' className={({ isActive }) => `text-[#703102] font-medium pb-1 transition-colors relative group ${isActive ? "border-b-2 border-[#703102]" : ""}`}>
                            About
                            {({ isActive }) => !isActive && <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#703102] transition-all duration-300 group-hover:w-full'></span>}
                        </NavLink>
                        <NavLink to='/products' className={({ isActive }) => `text-[#703102] font-medium pb-1 transition-colors relative group ${isActive ? "border-b-2 border-[#703102]" : ""}`}>
                            Products
                            {({ isActive }) => !isActive && <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#703102] transition-all duration-300 group-hover:w-full'></span>}
                        </NavLink>
                        <NavLink to='/podcast' className={({ isActive }) => `text-[#703102] font-medium pb-1 transition-colors relative group ${isActive ? "border-b-2 border-[#703102]" : ""}`}>
                            Podcast
                            {({ isActive }) => !isActive && <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#703102] transition-all duration-300 group-hover:w-full'></span>}
                        </NavLink>
                        <NavLink to='/testimonials' className={({ isActive }) => `text-[#703102] font-medium pb-1 transition-colors relative group ${isActive ? "border-b-2 border-[#703102]" : ""}`}>
                            Testimonials
                            {({ isActive }) => !isActive && <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#703102] transition-all duration-300 group-hover:w-full'></span>}
                        </NavLink>
                        <NavLink to='/contact' className={({ isActive }) => `text-[#703102] font-medium pb-1 transition-colors relative group ${isActive ? "border-b-2 border-[#703102]" : ""}`}>
                            Contact
                            {({ isActive }) => !isActive && <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#703102] transition-all duration-300 group-hover:w-full'></span>}
                        </NavLink>
                        <NavLink to='/blog' className={({ isActive }) => `text-[#703102] font-medium pb-1 transition-colors relative group ${isActive ? "border-b-2 border-[#703102]" : ""}`}>
                            Blogs
                            {({ isActive }) => !isActive && <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#703102] transition-all duration-300 group-hover:w-full'></span>}
                        </NavLink>
                        <NavLink to='/faqs' className={({ isActive }) => `text-[#703102] font-medium pb-1 transition-colors relative group ${isActive ? "border-b-2 border-[#703102]" : ""}`}>
                            FAQs
                            {({ isActive }) => !isActive && <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#703102] transition-all duration-300 group-hover:w-full'></span>}
                        </NavLink>
                    </div>

                    {/* User Icons */}
                    <div className="flex items-center  lg:gap-3 flex-shrink-0">
                        {/* Heart icon (only desktop) */}
                        <button className="hidden lg:flex h-8 w-10 lg:w-[76px] lg:h-12 cursor-pointer items-center justify-center lg:rounded-full lg:border lg:border-gray-300 lg:hover:bg-gray-100 transition">
                            <CiHeart className="w-4 h-4  lg:w-6 lg:h-6 text-[#703102] lg:text-gray-700" />
                        </button>

                        {/* Search icon (mobile + desktop) */}
                        <button className="flex h-8 w-10 lg:w-[76px] lg:h-12 items-center cursor-pointer lg:hidden justify-center rounded-full lg:border lg:border-gray-300 lg:hover:bg-gray-100 transition">
                            <CiSearch className="w-7 h-7 font-extrabold lg:w-6 lg:h-6 text-[#703102] lg:text-gray-700" />
                        </button>

                        {/* Cart icon (mobile + desktop) */}
                        <button className="flex h-8 w-10 lg:w-[76px] lg:h-12 items-center cursor-pointer justify-center rounded-full lg:border lg:border-gray-300 lg:hover:bg-gray-100 transition">
                            <CiShoppingCart className="w-7 h-7 font-extrabold lg:w-6 lg:h-6 text-[#703102] lg:text-gray-700" />
                        </button>

                        {/* User icon (only desktop) - Open login popup */}
                        <button
                            onClick={openLoginPopup}
                            className="hidden lg:flex h-8 w-10 lg:w-[76px] lg:h-12 cursor-pointer items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
                        >
                            <CiUser className="w-7 h-7 font-extrabold lg:w-6 lg:h-6 text-gray-700" />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden w-[28px] h-[22px]  flex items-center justify-center "
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <HiX className="text-[#703102] font-extrabold h-7 w-7" />
                            ) : (
                                <HiMenu className="text-[#703102] font-extrabold h-7 w-7" />
                            )}
                        </button>
                    </div>

                </div>

                {/* Full Screen Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className='lg:hidden fixed inset-0 bg-white z-50 flex flex-col h-screen'>
                        {/* Mobile Menu Header (Fixed) */}
                        <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                            <button onClick={toggleMenu} className='p-2'>
                                <HiX className='w-7 h-7 font-extrabold text-[#703102]' />
                            </button>

                            <div className='flex-1 flex justify-center'>
                                <img src='/logo.png' alt='logo' className='h-10 w-auto' />
                            </div>

                            <div className='flex items-center gap-2'>
                                <button className="p-2">
                                    <CiSearch className="w-7 h-7 font-extrabold text-[#703102]" />
                                </button>
                                <button className="p-2">
                                    <CiShoppingCart className="w-7 h-7 font-extrabold text-[#703102]" />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Navigation Links (Scrollable) */}
                        <div className="flex-1 overflow-y-auto p-4">
                            <div className="divide-y divide-gray-200">
                                <NavLink
                                    to="/"
                                    onClick={handleMobileLinkClick}
                                    className={({ isActive }) => `flex items-center gap-4 py-4 font-medium ${isActive ? "text-orange-500" : "text-[#703102]"}`}
                                >
                                    <img src="/Home.png" className="w-5 h-5" alt="Home Icon" />
                                    <span>Home</span>
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    onClick={handleMobileLinkClick}
                                    className={({ isActive }) => `flex items-center gap-4 py-4 font-medium ${isActive ? "text-orange-500" : "text-[#703102]"}`}
                                >
                                    <img src="/About.png" className="w-5 h-5" alt="About Icon" />
                                    <span>About</span>
                                </NavLink>
                                <NavLink
                                    to="/products"
                                    onClick={handleMobileLinkClick}
                                    className={({ isActive }) => `flex items-center gap-4 py-4 font-medium ${isActive ? "text-orange-500" : "text-[#703102]"}`}
                                >
                                    <img src="/p.png" className="w-5 h-5" alt="Products Icon" />
                                    <span>Products</span>
                                </NavLink>
                                <NavLink
                                    to="/podcast"
                                    onClick={handleMobileLinkClick}
                                    className={({ isActive }) => `flex items-center gap-4 py-4 font-medium ${isActive ? "text-orange-500" : "text-[#703102]"}`}
                                >
                                    <img src="/Podcast.png" className="w-5 h-5" alt="Podcast Icon" />
                                    <span>Podcast</span>
                                </NavLink>
                                <NavLink
                                    to="/testimonials"
                                    onClick={handleMobileLinkClick}
                                    className={({ isActive }) => `flex items-center gap-4 py-4 font-medium ${isActive ? "text-orange-500" : "text-[#703102]"}`}
                                >
                                    <img src="/Testimonials.png" className="w-5 h-5" alt="Testimonials Icon" />
                                    <span>Testimonials</span>
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    onClick={handleMobileLinkClick}
                                    className={({ isActive }) => `flex items-center gap-4 py-4 font-medium ${isActive ? "text-orange-500" : "text-[#703102]"}`}
                                >
                                    <img src="/Contact.png" className="w-5 h-5" alt="Contact Icon" />
                                    <span>Contact</span>
                                </NavLink>
                                <NavLink
                                    to="/blog"
                                    onClick={handleMobileLinkClick}
                                    className={({ isActive }) => `flex items-center gap-4 py-4 font-medium ${isActive ? "text-orange-500" : "text-[#703102]"}`}
                                >
                                    <img src="/Blog.png" className="w-5 h-5" alt="Blogs Icon" />
                                    <span>Blogs</span>
                                </NavLink>
                                <NavLink
                                    to="/faqs"
                                    onClick={handleMobileLinkClick}
                                    className={({ isActive }) => `flex items-center gap-4 py-4 font-medium ${isActive ? "text-orange-500" : "text-[#703102]"}`}
                                >
                                    <img src="/faq.png" className="w-5 h-5" alt="FAQ Icon" />
                                    <span>FAQs</span>
                                </NavLink>
                            </div>

                            {/* Login/Sign Up Button - now opens Login */}
                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={openLoginPopup}
                                    className="bg-[#703102] text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors"
                                >
                                    Login / Sign Up
                                </button>
                            </div>

                            {/* Contact Information */}
                            <div className="mt-8 text-center">
                                <p className="text-[#703102] font-semibold text-xl mb-2">Contact us:</p>
                                <div className="flex items-center justify-center gap-2 text-[#703102] mb-4">
                                    <LuPhone className="w-5 h-5" />
                                    <span className="font-semibold text-xl">+91 9876543210</span>
                                </div>

                                {/* Social Media Links */}
                                <div className="mt-8 flex justify-center gap-6 ">
                                    <FiFacebook className="h-7 w-7 text-[#FFAB4A] cursor-pointer font-extrabold" />
                                    <LuTwitter className="h-7 w-7 text-[#FFAB4A] cursor-pointer font-extrabold" />
                                    <FaInstagram className="h-7 w-7 text-[#FFAB4A] cursor-pointer font-extrabold" />
                                    <LuYoutube className="h-7 w-7 text-[#FFAB4A] cursor-pointer font-extrabold" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Auth Popups */}
            <LoginPopup
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onContinue={handleLoginContinue}
                onForgot={handleGoToForget}
                onSignup={handleGoToSignup}
            />
            <SignupPopup
                isOpen={isSignupOpen}
                onClose={() => setIsSignupOpen(false)}
                onLogin={handleGoToLogin}
                onContinue={handleSignupContinue}
                onGoBack={() => setIsSignupOpen(true)}
            />
            <ForgetPopup
                isOpen={isForgetOpen}
                onClose={() => setIsForgetOpen(false)}
                onContinue={handleForgetContinue}
                onGoBack={handleForgetGoBack}
            />
           <OtpPopup
                isOpen={isOtpOpen}
                onClose={() => setIsOtpOpen(false)}
                onContinue={handleOtpContinue}
                onGoBack={handleOtpGoBack}
            />
            <CPasswordPopup
                isOpen={isCPasswordOpen}
                onClose={() => setIsCPasswordOpen(false)}
                onContinue={handleCPasswordContinue}
                onGoBack={handleCpassGoBack}
            />
            <SOtpPopup
                isOpen={isSOtpOpen}
                onClose={() => setIsSOtpOpen(false)}
                onContinue={handleSOtpContinue}
                onGoBack={handleSOtpGoBack}
            />
            <PasswordPopup
                isOpen={isPasswordOpen}
                onClose={handlePasswordClose}
                onContinue={handlePasswordContinue}
                onGoBack={handlePasswordGoBack}
            />
        </div>
    )
}

export default Navbar;