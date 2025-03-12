import React from "react";
import Logo from "./Logo";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-10 px-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left'>
        {/* Logo & Copyright */}
        <div className='flex flex-col items-start'>
          <Logo />
          <p className='text-[#94A3B8] mt-2 text-sm'>
            2016 - 2025 OneMillionLandlord - RC 172819
          </p>
        </div>

        {/* Company & Support */}
        <div className='flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-12'>
          <div>
            <h4 className='font-semibold mb-2 text-[#94A3B8]'>Company</h4>
            <p className='text-[#94A3B8] text-sm'>Track your Investment</p>
            <p className='text-[#94A3B8] text-sm'>About Us</p>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-[#94A3B8]'>Support</h4>
            <p className='text-[#94A3B8] text-sm'>FAQs</p>
            <p className='text-[#94A3B8] text-sm'>Contact Us</p>
          </div>
        </div>

        {/* Contact & Social Media */}
        <div className='flex md:flex-col flex-col-reverse items-start md:items-end space-y-2 md:space-y-0'>
          {/* Social Media Icons (Eerst op Desktop, Laatst op Mobiel) */}
          <div className='flex space-x-4 text-[#94A3B8] text-lg md:mb-4 mt-2 md:mt-0'>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaTiktok />
            <FaYoutube />
          </div>
          <div className='flex flex-col items-start md:items-end'>
            {" "}
            <p className='text-[#94A3B8] text-sm'>
              4 Jibowu Street, Jibowu, Yaba, Lagos
            </p>
            <p className='text-[#94A3B8] text-sm'>
              management@onemillionlandlord.com
            </p>
            <p className='text-[#94A3B8] text-sm'>+234 803 733 9281</p>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className='border-t border-gray-700 mt-6'></div>
    </footer>
  );
};

export default Footer;
