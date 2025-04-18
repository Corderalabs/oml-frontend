import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({
  handleNavClick,
}: {
  handleNavClick: (section: string) => void;
}) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:support@onemillionlandlord.ng";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+2349026259544";
  };

  return (
    <footer className='bg-black text-white py-10 md:h-[380px] flex justify-between items-center px-6 w-full'>
      <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left'>
        {/* Logo & Copyright */}
        <div className='flex flex-col gap-3 items-start'>
          <Link href={"/"}>
            <Image
              src='/logo.png'
              alt='Logo'
              className='w-[70px] h-[50px] md:w-[131px] md:h-[95px]'
              width={141}
              height={105}
            />
          </Link>

          <p className='text-[#94A3B8] mt-2 text-sm'>
            2016 - 2025 OneMillionLandlord - RC 172819
          </p>
        </div>

        {/* Company & Support */}
        <div className='flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-12'>
          <div className='flex flex-col gap-3'>
            <h4 className='font-semibold mb-2 text-[#94A3B8]'>Company</h4>
            {/* <p className='text-[#94A3B8] text-sm'>Track your Investment</p> */}
            <Link
              href='/one-million-academy'
              className='text-[#94A3B8] text-sm'
            >
              One Million Academy
            </Link>
            <Link href='/about-us' className='text-[#94A3B8] text-sm'>
              About Us
            </Link>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='font-semibold mb-2 text-[#94A3B8]'>Support</h4>
            <button
              className='text-[#94A3B8] text-sm text-left'
              onClick={() => handleNavClick("faq")}
            >
              FAQs
            </button>
            <Link href='/contact' className='text-[#94A3B8] text-sm'>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact & Social Media */}
        <div className='flex md:flex-col gap-2 flex-col-reverse items-start md:items-end space-y-2 md:space-y-0'>
          {/* Social Media Icons */}
          <div className='flex space-x-4 text-white text-lg md:mb-4 mt-2 md:mt-0'>
            <a
              href='https://www.facebook.com/share/18bReVwf3c/?mibextid=wwXIfr'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://www.instagram.com/onemillionlandlord?igsh=MWI5cXIydDh2eGs2ag=='
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
            <a
              href='https://x.com/1millilandlord?s=21'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaXTwitter />
            </a>
            <a
              href='https://youtube.com/@onemillionlandlord4122?si=Wosm5n_tivQPwmlO'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaYoutube />
            </a>

            <a
              href='https://www.tiktok.com/@one.million.landl?_t=ZM-8vFgEb5XiPV&_r=1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTiktok />
            </a>
          </div>
          <div className='flex flex-col gap-4 items-start md:items-end'>
            <p className='text-[#94A3B8] text-sm'>
              4 Jibowu Street, Jibowu, Yaba, Lagos
            </p>
            <p
              onClick={handleEmailClick}
              className='text-[#94A3B8] text-sm cursor-pointer'
            >
              support@onemillionlandlord.ng
            </p>
            <p
              onClick={handleCallClick}
              className='text-[#94A3B8] text-sm cursor-pointer'
            >
              +234 902 625 9544
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className='border-t border-gray-700 mt-6'></div>
    </footer>
  );
};

export default Footer;
