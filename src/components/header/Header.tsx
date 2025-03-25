import Link from "next/link";
import Logo from "../Logo";
import Image from "next/image";
import useHeader from "./hook/useHeader";
import DropBar from "./DropBar";

export const navLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Our Projects", url: "#project" },
  { name: "FAQs", url: "#faq" },
  { name: "Contact Us", url: "/contact" },
  { name: "Track Investment", url: "#" },
];

const Header = ({
  handleNavClick,
}: {
  handleNavClick: (section: string) => void;
}) => {
  const { closeHandler, isSidebar, toggleHandler } = useHeader();

  return (
    <header className='bg-[#EFF6FF] py-4 text-black px-2'>
      <div className='w-[95%] mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-10'>
          <Logo />
          <nav className='hidden md:flex space-x-10 text-sm font-medium'>
            {navLinks.map((link, index) => (
              <button
                key={index}
                className='text-black hover:text-blue-600'
                onClick={() => {
                  if (link.url.startsWith("#")) {
                    handleNavClick(link.url.replace("#", ""));
                  } else {
                    window.location.href = link.url; // External links
                  }
                }}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-md hidden md:block'>
          Download Brochure
        </button>
        <Image
          src={"/menu.svg"}
          className='md:hidden cursor-pointer'
          alt=''
          width={24}
          height={24}
          onClick={toggleHandler}
        />
      </div>
      <DropBar
        action={toggleHandler}
        close={closeHandler}
        isSidebar={isSidebar}
      />
    </header>
  );
};

export default Header;
