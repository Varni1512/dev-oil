import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
    };

    const socialLinks = [
        { icon: <Facebook size={24} className="text-[#703102]" />, href: "#" },
        { icon: <Twitter size={24} className="text-[#703102]" />, href: "#" },
        { icon: <Instagram size={24} className="text-[#703102]" />, href: "#" },
        { icon: <Youtube size={24} className="text-[#703102]" />, href: "#" },
    ];

    return (
        <div className="min-h-screen py-8 px-4"
            style={{
                backgroundImage: `url("/backgroundLines.png")`,
            }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#703102] mb-3 max-w-2xl mx-auto">
                        We want to hear<br /> from you
                    </h1>
                    <p className="font-inter font-medium text-[18px] sm:text-[20px] lg:text-[24px] leading-[100%] tracking-[0px] text-center text-[#595959] max-w-3xl mx-auto">
                        Send us a message, give us a call, or better visit us.
                    </p>
                </div>

                {/* Main Container with Background Image and Form Overlay */}
                <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#F8F8F8] h-[700px] md:h-[800px]">
                    {/* Background Image */}
                    <div className="relative h-[700px] md:h-[800px]">
                        <img
                            src="/man.png"
                            alt="Professional contact person"
                            className="w-full h-[500px] md:h-[600px] object-cover"
                        />

                        {/* Form Overlay */}
                        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
                            <div className="w-full max-w-3xl mx-4">
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                                    <div className="space-y-4">
                                        {/* First Row - First Name and Last Name */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-[#703102] rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-[#703102] rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        {/* Second Row - Email and Phone */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-[#703102] rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-[#703102] rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <textarea
                                                name="message"
                                                placeholder="Your Message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={4}
                                                className="w-full px-4 py-3 bg-gray-50 border border-[#703102] rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-none"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-[#703102] hover:bg-amber-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 mt-14 lg:mt-32 max-w-6xl mx-auto">
                    {/* Call Us Card */}
                    <div className="w-full max-w-[360px] h-auto bg-white border border-[#703102] rounded-[10px] p-4 flex items-center gap-5 opacity-100 mx-auto">
                        <img src="/phone.png" alt="Phone" className="w-8 h-8 object-contain" />
                        <div className="space-y-2">
                            <h3 className="font-medium text-[20px] leading-[24px] text-[#595959] font-['Inter']">
                                Call us
                            </h3>
                            <p className="font-semibold text-[22px] leading-[24px] text-black font-['Inter']">
                                +919876543210
                            </p>
                            <p className="font-medium text-[18px] leading-[20px] text-[#595959] font-['Inter']">
                                Mon-Sat, 9am - 7pm
                            </p>
                        </div>
                    </div>

                    {/* Email Us Card */}
                    <div className="w-full max-w-[360px] h-auto bg-white border border-[#703102] rounded-[10px] p-4 flex items-center gap-5 opacity-100 mx-auto">
                        <img src="/mail.png" alt="Mail" className="w-8 h-8 object-contain" />
                        <div className="space-y-2">
                            <h3 className="font-medium text-[20px] leading-[24px] text-[#595959] font-['Inter']">
                                Email us
                            </h3>
                            <p className="font-semibold text-[22px] leading-[24px] text-black font-['Inter']">
                                info@devnaturaloils.com
                            </p>
                            <p className="font-medium text-[18px] leading-[20px] text-[#595959] font-['Inter']">
                                We reply within 24 hours
                            </p>
                        </div>
                    </div>

                    {/* Our Address Card */}
                    <div className="w-full max-w-[360px] h-auto bg-white border border-[#703102] rounded-[10px] p-4 flex items-center gap-5 opacity-100 mx-auto">
                        <img src="/location.png" alt="Location" className="w-8 h-8 object-contain" />
                        <div className="space-y-2">
                            <h3 className="font-medium text-[20px] leading-[24px] text-[#595959] font-['Inter']">
                                Our Address
                            </h3>
                            <p className="font-semibold text-[22px] leading-[24px] text-black font-['Inter']">
                                123 Oil Mill Street
                            </p>
                            <p className="font-medium text-[18px] leading-[20px] text-[#595959] font-['Inter']">
                                Mumbai, Maharashtra 400001
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="text-center mt-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#703102] mb-6">
                        Follow our social media
                    </h2>
                    <div className="flex justify-center items-center gap-4 flex-wrap">
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
        </div>
    );
};

export default ContactForm;