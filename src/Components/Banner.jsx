import bannerBg from "../assets/more/6.jpeg"; // Replace with your actual bg image path

const Banner = () => {
  return (
    <section
      className="bg-cover  bg-left h-[800px] bg-no-repeat flex items-center px-4"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      {/* Content container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 text-start text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-rancho mb-6">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            It&apos;s coffee time – Sip & Savor. Relaxation in every sip! Get the nostalgia back!! 
            Your companion of every moment! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="bg-[#D2B48C] hover:bg-[#C19A74] text-brown-900 font-medium text-lg px-6 py-3 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
