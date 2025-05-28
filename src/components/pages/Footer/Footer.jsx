
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-100 text-black py-10 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Email Sign-up */}
        <div>
          <div>
            <img src="/logo.png" alt="" />
          </div>
          <p className="mb-4">
            Premium men's hair solutions for confidence and style
          </p>
          <div className="flex border-b border-black w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email here"
              className="bg-transparent outline-none py-2 px-2 w-full"
            />
            <button className="bg-white border border-black px-4 py-2 font-semibold">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold mb-3">Quick Links</h2>
          <ul className="space-y-1">
            <li>Homet</li>
            <li>Our Story</li>
            <li>3D Try On</li>
            <li>About Us</li>
            <li>Shipping Info</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h2 className="font-bold mb-3">Contact Support</h2>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Call</li>
            <li>Email</li>
            <li>Address</li>
            <li>T&C| Return | Privacy </li>
            <li>FAQ | Help</li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <p className="mb-2">Newsletter: Stay updated! [Subscribe Button]</p>
          <p className="mb-2">
            Payment Methods: Visa | PayPal | UPI | Net Banking
          </p>
          <p className="mb-4">100% Secure Checkout</p>
          <div className="flex items-center space-x-4 text-2xl">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-sm flex flex-col md:flex-row items-center justify-between text-gray-700">
        <div className="flex gap-4 mb-2 md:mb-0">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div>© 2025 Domain. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

