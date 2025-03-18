import Link from "next/link";
import Logo from "./Logo";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <header className='bg-[#EFF6FF] py-4 text-black'>
      <div className="w-[95%] mx-auto flex justify-between items-center">
        <div className='flex items-center space-x-10'>
          <Logo />
          <nav className='hidden md:flex space-x-10 text-sm font-medium'>
            <Link href='/'>Home</Link>
            <Link href='/about-us'>About Us</Link>
            <Link href='#'>Our Projects</Link>
            <Link href='#'>FAQs</Link>
            <Link href='/contact'>Contact Us</Link>
            <Link href='#' className=''>
              Track Investment
            </Link>
          </nav>
        </div>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-md hidden md:block'>
          Download Brochure
        </button>
        <BiMenu className='md:hidden w-8 h-8' />
      </div>
    </header>
  );
};

export default Header;
