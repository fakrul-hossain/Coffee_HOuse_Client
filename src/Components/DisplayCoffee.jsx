
import img1 from "../assets/cups/Rectangle 10.png";
import img2 from "../assets/cups/Rectangle 11.png";
import img3 from "../assets/cups/Rectangle 12.png";
import img4 from "../assets/cups/Rectangle 13.png";
import img5 from "../assets/cups/Rectangle 14.png";
import img6 from "../assets/cups/Rectangle 15.png";
import img7 from "../assets/cups/Rectangle 16.png";
import img8 from "../assets/cups/Rectangle 9.png";

const DisplayCoffee = () => {
  return (
    <div className="bg-white my-16">
      <div className="text-center mb-10">
        <p className="text-primary font-Raleway">Follow Us Now</p>
        <h2 className="text-primary font-rancho text-3xl font-bold">
          Follow on Instagram
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* Images */}
        <img
          src={img1}
          alt="Coffee Cup 1"
          className="w-full rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        />
        <img
          src={img2}
          alt="Coffee Cup 2"
          className="w-full rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        />
        <img
          src={img3}
          alt="Coffee Cup 3"
          className="w-full rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        />
        <img
          src={img4}
          alt="Coffee Cup 4"
          className="w-full rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        />
        <img
          src={img5}
          alt="Coffee Cup 5"
          className="w-full rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        />
        <img
          src={img6}
          alt="Coffee Cup 6"
          className="w-full rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        />
        <img
          src={img7}
          alt="Coffee Cup 7"
          className="w-full rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        />
        <img
          src={img8}
          alt="Coffee Cup 7"
          className="w-full rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        />
      </div>
    </div>
  );
};

export default DisplayCoffee;
