import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import logoFooterOne from "../../../public/logo-footer-1.png";
import logoFooterTwo from "../../../public/logo-footer-2.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#E7E7E3] p-8">
        <div className="bg-[#4A69E2] h-[280px]  text-white p-8 rounded-t-3xl -mb-10 ">
          <div className="max-w-7xl mx-auto flex justify-between">
            <div>
              <h2 className="text-4xl">
                JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF
              </h2>
              <p className="mt-4">Sign up for free! Join the community.</p>

              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-2 rounded-md focus:outline-none bg-transparent border border-white placeholder:text-gray-200"
                />
                <button className="px-4 py-2 bg-[#232321] text-white rounded-md">
                  SUBMIT
                </button>
              </div>
            </div>
            <div>
              <Image
                src={logoFooterOne}
                width={380}
                height={70}
                alt="logo"
                className="lg:block xl:block hidden"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#232321] text-white pt-8 px-8 rounded-3xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl text-[#FFA52F]">About us</h3>
              <p className="mt-4">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-[#FFA52F]">Categories</h3>
              <ul className="mt-4 space-y-2">
                <li>Runners</li>
                <li>Sneakers</li>
                <li>Basketball</li>
                <li>Outdoor</li>
                <li>Golf</li>
                <li>Hiking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-[#FFA52F]">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-[#FFA52F]">Follow us</h3>
              <div className="mt-4 flex space-x-4">
                <FaFacebookF className="w-6 h-6" />
                <FaTwitter className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
                <FaTiktok className="w-6 h-6" />
              </div>
            </div>
          </div>
          <Image
            src={logoFooterTwo}
            width={1920}
            height={100}
            alt="logo"
            className="lg:pt-4 sm:pt-8 pt-8"
          />
        </div>

        <div className="text-center py-4 text-gray-600 text-sm">
          <div className="max-w-7xl mx-auto">
            © All rights reserved | Made with
            <span className="text-red-500">❤️</span> by
            <a href="#" className="text-blue-500">
              Hamza Shahid
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
