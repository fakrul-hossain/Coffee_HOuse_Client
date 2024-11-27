
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const About = () => {
    return (
        <div className="bg-[#ECEAE3] py-12 font-rancho">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {/* Awesome Aroma */}
                <div className="flex flex-col items-center">
                    <img src={icon1} alt="Awesome Aroma Icon" className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl  font-semibold mb-2">Awesome Aroma</h3>
                    <p className="text-gray-600">
                        You will definitely be a fan of the design <br /> & aroma of your coffee.
                    </p>
                </div>
                {/* High Quality */}
                <div className="flex flex-col items-center">
                    <img src={icon2} alt="High Quality Icon" className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl  font-semibold mb-2">High Quality</h3>
                    <p className="text-gray-600 ">
                        We served the coffee to you maintaining <br /> the best quality.
                    </p>
                </div>
                {/* Pure Grades */}
                <div className="flex flex-col items-center">
                    <img src={icon3} alt="Pure Grades Icon" className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl  font-semibold mb-2">Pure Grades</h3>
                    <p className="text-gray-600 ">
                        The coffee is made of the green coffee <br /> beans which you will love.
                    </p>
                </div>
                {/* Proper Roasting */}
                <div className="flex flex-col items-center">
                    <img src={icon4} alt="Proper Roasting Icon" className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl  font-semibold mb-2">Proper Roasting</h3>
                    <p className="text-gray-600 ">
                        Your coffee is brewed by first roasting <br /> the green coffee beans.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
