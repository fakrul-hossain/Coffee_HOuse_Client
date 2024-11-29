
import { Link, useLoaderData } from "react-router-dom";
import bgImg from "../assets/more/11.png";

const CoffeeDetails = () => {
  const coffeeDetails = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = coffeeDetails;

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center px-4"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="mt-8 w-full max-w-5xl">
          {/* Back to Home */}
          <Link
            to={"/"}
            className="text-xl md:text-2xl font-rancho text-primary hover:text-black font-medium inline-block mb-6"
          >
            &larr; Back to home
          </Link>

          {/* Coffee Card */}
          <div className="w-full p-6 md:p-20 bg-[#F4F3F0] rounded-lg shadow-lg md:mt-28 md:gap-20 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
            {/* Coffee Image */}
            <div className="w-full lg:w-1/4">
              <img
                src={photo}
                alt={name}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Coffee Details */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-rancho text-primary mb-4 text-center lg:text-left">
                Niceties
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <span className="font-bold">Name:</span> {name}
                </p>
                <p>
                  <span className="font-bold">Chef:</span> {chef}
                </p>
                <p>
                  <span className="font-bold">Supplier:</span> {supplier}
                </p>
                <p>
                  <span className="font-bold">Taste:</span> {taste}
                </p>
                <p>
                  <span className="font-bold">Category:</span> {category}
                </p>
                <p>
                  <span className="font-bold">Details:</span> {details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
