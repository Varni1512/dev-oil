import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12 px-4 sm:px-7 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-13">

          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-full h-full ">
                <img
                  src="/footer.png" // Replace with your correct path
                  alt="Dev Natural Oils"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>

            <p className="text-sm text-amber-200 leading-relaxed mb-6">
              We are committed to providing the finest quality cold-pressed and wood-pressed oils,
              preserving traditional methods while ensuring premium nutrition and authentic flavors.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors text-sm">All Products</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors text-sm">Cold & Wood Pressed Oils</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/blog" className="text-amber-200 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="/why" className="text-amber-200 hover:text-white transition-colors text-sm">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors text-sm">Shipping Info</a></li>
              <li><a href="/order" className="text-amber-200 hover:text-white transition-colors text-sm">Track Order</a></li>
              <li><a href="/bulk-order" className="text-amber-200 hover:text-white transition-colors text-sm">Bulk Order</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-amber-200 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="text-amber-200 hover:text-white transition-colors text-sm">Return Policy</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors text-sm">Shipping Policy</a></li>
              <li><a href="/terms-of-service" className="text-amber-200 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>

            {/* Phone */}
            <div className="flex items-center mb-4">
              <Phone size={16} className="text-amber-300 mr-3 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">+91 9876543210</p>
                <p className="text-amber-200 text-xs">Mon-Sat, 9am-7pm</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center mb-4">
              <Mail size={16} className="text-amber-300 mr-3 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">info@devnaturaloils.com</p>
                <p className="text-amber-200 text-xs">We reply within 24hrs</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start mb-4">
              <MapPin size={16} className="text-amber-300 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white text-sm font-medium">123 Oil Mill Street</p>
                <p className="text-amber-200 text-xs">Mumbai, Maharashtra 400001</p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-4">
              <div
                className="relative overflow-hidden rounded-[18.26px]"
                style={{
                  width: '203.18px',       // width
                  height: '113.60px',      // height
                  opacity: 1,
                  transform: 'rotate(0deg)', // angle
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83962672018!2d77.06889911944928!3d28.527280410686384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dc0c00d45f7%3A0x7c9c7a2fa3e4e9e0!2sSector%2016%2C%20Noida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1693685267084!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-amber-800 mt-12 pt-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-200 text-sm">
            © 2024 Dev Natural Oils. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;