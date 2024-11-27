import navLogo from "../assets/more/24.jpg"
import Logo from "../assets/more/logo1.png"




const Navbar = () => {
    return (
        <div>
            {/* Bottom Section */}
         <div className="text-center text-[20px] font-rancho flex justify-center items-center gap-3  text-white  border-brown-200 py-2 m-0"  style={{
        backgroundImage: `url(${navLogo})`, // Replace with your actual image URL
      }}>
        <img className="w-16 h-16" src={Logo} alt="logo" />
          <p className="text-[30px]">
          Espresso Emporium
          </p>
        </div>
        </div>
    );
};

export default Navbar;