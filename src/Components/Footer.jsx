import logo from "../Assets/Logo.svg";
import visa from "../Assets/Visa.svg";
import mastercard from "../Assets/Mastercard.svg";
import bitcoin from "../Assets/Bitcoin.svg";
import twitter from "../Assets/twitter.svg";
import facebook from "../Assets/facebook.svg";
import linkedin from "../Assets/linkedin.svg";
import instagram from "../Assets/instagram.svg";
import youtube from "../Assets/youtube.svg";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto px-6 text-white mb-[5rem]">
        <div className="flex flex-col items-center justify-center text-center lg:text-start lg:flex-row lg:justify-between lg:items-start mb-[7rem]">
          <div className="mb-[3rem]">
            <img src={logo} alt="" />
          </div>
          <div className="space-y-4 mb-[3rem]">
            <p className="font-semibold mb-4">Quick Link</p>
            <p className="text-[#E0E0E0]">Home</p>
            <p className="text-[#E0E0E0]">Products</p>
            <p className="text-[#E0E0E0]">About</p>
            <p className="text-[#E0E0E0]">Features</p>
            <p className="text-[#E0E0E0]">Contact</p>
          </div>
          <div className="space-y-4 mb-[3rem]">
            <p className="font-semibold mb-4">Resources</p>
            <p className="text-[#E0E0E0]">Download Whitepapper</p>
            <p className="text-[#E0E0E0]">Smart Token</p>
            <p className="text-[#E0E0E0]">Blockchain Explorer</p>
            <p className="text-[#E0E0E0]">Crypto API</p>
            <p className="text-[#E0E0E0]">Interest</p>
          </div>

          <div>
            <h2 className="lg:text-3xl lg:max-w-[20rem] mb-[1.5rem]">
              We accept following payment systems
            </h2>

            <div className="flex items-center gap-[1rem]">
              <div>
                <img src={visa} alt="" />
              </div>
              <div>
                <img src={mastercard} alt="" />
              </div>
              <div>
                <img src={bitcoin} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 lg:flex-row lg:justify-between">
          <p>©2021 CRAPPO. All rights reserved</p>

          <div className="flex items-center gap-[2rem]">
            <a href="#fb">
              <img src={facebook} alt="" />
            </a>
            <a href="#ig">
              <img src={instagram} alt="" />
            </a>
            <a href="#yt">
              <img src={youtube} alt="" />
            </a>
            <a href="#tweet">
              <img src={twitter} alt="" />
            </a>
            <a href="#connect">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
