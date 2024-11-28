import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiPhone, HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import footerLogo from "../assets/more/logo1.png"
import footerBg from "../assets/more/13.jpg"
import footerBg2 from "../assets/more/24.jpg"

const Footer = () => {
  return (
    <footer className="font-rancho">
     <div className="bg-cover bg-center bg-no-repeat border-t-4 border-b-4  border-dashed border-text-primary text-primary pt-10 pb-4 font-rancho"
      style={{
        backgroundImage: `url(${footerBg})`, // 
      }}>
     <div className="container mx-auto px-4 md:px-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={footerLogo} // Replace with your logo image URL
                alt="Logo"
                className="w-12 h-12"
              />
              <h2 className="text-[45px] mb-3 text-primary">Espresso Emporium</h2>
            </div>
            <p className="text-primary mb-4 text-[20px]">
              Always ready to be your friend. Come & Contact with us to share <br />
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex space-x-4 text-xl mb-6">
              <a
                href="#"
                className="hover:text-brown-600 transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-brown-600 transition-colors duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-brown-600 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-brown-600 transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <h2 className="text-[45px] mb-3 text-primary">Get in Touch</h2>
            <div className="space-y-2  text-primary text-[20px]">
              <p className="flex items-center space-x-2">
                <HiPhone />
                <span>+88 01533 333 333</span>
              </p>
              <p className="flex items-center space-x-2">
                <HiMail />
                <span>info@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <MdLocationOn />
                <span>72, Wall Street, King Road, Dhaka</span>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-[45px] text-primary font-bold text-brown-900 mb-6">
              Connect with Us
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded border-text-primary  bg-white py-2 px-4 focus:outline-text-primary  focus:border-text-primary "
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded border-text-primary  bg-white py-2 px-4 focus:outline-text-primary  focus:border-text-primary"
              />
              <textarea
                placeholder="Message"
                className="w-full rounded border-text-primary  bg-white py-2 px-4 focus:outline-text-primary  focus:border-text-primary "
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-brown-500 hover:bg-primary hover:text-white hover:border-white text-[30px] text-primary font-medium py-2 px-6 border-2 border-primary rounded-full transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
    
      </div>
     </div>
         {/* Bottom Section */}
         <div className="text-center text-[20px]  text-white border-t border-brown-200 py-4"  style={{
        backgroundImage: `url(${footerBg2})`, // Replace with your actual image URL
      }}>
          © Copyright Espresso Emporium | All Rights Reserved
        </div>
    </footer>
  );
};

export default Footer;
