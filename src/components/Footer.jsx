// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

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
                  src="/footer.png"
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
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-amber-200 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/products" className="text-amber-200 hover:text-white transition-colors text-sm">All Products</Link></li>
              <li><Link to="/products/cold-wood" className="text-amber-200 hover:text-white transition-colors text-sm">Cold &amp; Wood Pressed Oils</Link></li>
              <li><Link to="/about" className="text-amber-200 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/blog" className="text-amber-200 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/why" className="text-amber-200 hover:text-white transition-colors text-sm">Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-amber-200 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/faq" className="text-amber-200 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/shipping" className="text-amber-200 hover:text-white transition-colors text-sm">Shipping Info</Link></li>
              <li><Link to="/order" className="text-amber-200 hover:text-white transition-colors text-sm">Track Order</Link></li>
              <li><Link to="/bulk-order" className="text-amber-200 hover:text-white transition-colors text-sm">Bulk Order</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-amber-200 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="text-amber-200 hover:text-white transition-colors text-sm">Return Policy</Link></li>
              <li><Link to="/shipping-policy" className="text-amber-200 hover:text-white transition-colors text-sm">Shipping Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-amber-200 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>

            {/* Phone */}
            <div className="flex items-center mb-4">
              <Phone size={16} className="text-amber-300 mr-3 flex-shrink-0" />
              <div>
                <a href="tel:+919876543210" className="text-white text-sm font-medium">+91 9876543210</a>
                <p className="text-amber-200 text-xs">Mon-Sat, 9am-7pm</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center mb-4">
              <Mail size={16} className="text-amber-300 mr-3 flex-shrink-0" />
              <div>
                <a href="mailto:info@devnaturaloils.com" className="text-white text-sm font-medium">info@devnaturaloils.com</a>
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
                  width: '203.18px',
                  height: '113.60px',
                  opacity: 1,
                  transform: 'rotate(0deg)',
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