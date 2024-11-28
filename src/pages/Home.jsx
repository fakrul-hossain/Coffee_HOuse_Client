import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import bgImage from "../assets/more/1.png";
import iconImg from "../assets/icons/1.png";
import DisplayCoffee from "../Components/DisplayCoffees";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  // Function to handle coffee deletion
  const handleDelete = (id) => {
    const remainingCoffees = coffees.filter((coffee) => coffee._id !== id);
    setCoffees(remainingCoffees);
  };

  return (
    <div>
      <Banner />
      <About />

      {/* Coffee Section */}
      <section
        className="bg-cover bg-center font-Raleway bg-no-repeat py-16"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl font-rancho text-brown-900 mb-6">
            --- Sip & Savor ---
          </h2>
          <h3 className="text-center text-2xl md:text-4xl font-rancho text-primary font-bold mb-10">
            Our Popular Products
          </h3>

          {/* Add Coffee Button */}
          <div className="text-center flex justify-center items-center mb-8">
            <Link to={"/addCoffee"}>
              <button
                className="bg-[#D2B48C] border-2 border-primary flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-brown-900 font-bold text-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <span className="font-rancho text-white">Add Coffee</span>
                <img src={iconImg} alt="Coffee Icon" className="w-6 h-6" />
              </button>
            </Link>
          </div>

          {/* Coffee Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coffees && coffees.length > 0 ? (
              coffees.map((coffee) => (
                <DisplayCoffee
                  key={coffee._id}
                  coffee={coffee}
                  onDelete={handleDelete} // Pass the delete handler
                />
              ))
            ) : (
              <div className="col-span-full text-center text-brown-900 font-medium">
                No coffee items available. Please check back later!
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
