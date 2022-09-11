import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import illustration from "../Assets/Illustration.png";
import arrowRight from "../Assets/Arrow Right.svg";
import chart from "../Assets/chart.png";
import users from "../Assets/users.png";
import countries from "../Assets/countries.png";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container text-white mx-auto px-4">
      <div className="w-full h-full">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div>
              <div className="flex justify-between items-center bg-gray-500 rounded-full max-w-[18rem] p-1 pl-1 pr-3 mb-6">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  className="text-xs text-black bg-white max-w-[7rem] rounded-full py-1 px-3 font-bold"
                >
                  75% SAVE
                </div>
                <div className="text-xs ml-3 lg:ml-0">
                  For the Black Friday weekend
                </div>
              </div>

              <div className="max-w-[36rem] text-5xl">
                Fastest & secure platform to invest in crypto
              </div>
              <div className="max-w-[26rem] py-3">
                Buy and sell cryptocurrencies, trusted by 10M wallets with over
                $30 billion in transactions.
              </div>
              <div className="py-3">
                <button className="flex items-center gap-5 bg-blue-500 rounded-full py-4 px-4">
                  Try for FREE
                  <img src={arrowRight} alt="" data-aos="slide-right" />
                </button>
              </div>
            </div>
            <div>
              <img
                src={illustration}
                alt=""
                className="lg:w-[80%]"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-20">
          <div className="flex flex-col justify-start items-center lg:flex-row lg:justify-evenly lg:items-center  gap-[10rem]">
            <div className="flex items-start gap-4">
              <img src={chart} alt="" />
              <div className="flex flex-col">
                <p className="text-4xl font-bold mb-4">$30B</p>
                <p className="text-xs text-gray-300">
                  Digital Currency Exchanged
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={users} alt="" />
              <div className="flex flex-col">
                <p className="text-4xl font-bold mb-4">10M+</p>
                <p className="text-xs text-gray-300">
                  Trusted Wallets Investor
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={countries} alt="" />
              <div className="flex flex-col">
                <p className="text-4xl font-bold mb-4">195</p>
                <p className="text-xs text-gray-300">Countries Supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
