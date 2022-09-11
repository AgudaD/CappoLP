import { useState } from "react";
import logo from "../Assets/Logo.svg";
import hamburgerMenu from "../Assets/menu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white">
      <header className="py-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="#logo">
              <img src={logo} alt="" />
            </a>
            <div className="hidden lg:flex gap-x-[2rem]">
              <nav className="hidden lg:flex items-center">
                <ul className="flex gap-x-[1.5rem] cursor-pointer">
                  <li className="transition-all border-b border-transparent hover:border-blue-500">
                    <a href="#products">Products</a>
                  </li>
                  <li className="transition-all border-b border-transparent hover:border-blue-500">
                    <a href="#features">Features</a>
                  </li>
                  <li className="transition-all border-b border-transparent hover:border-blue-500">
                    <a href="#about">About</a>
                  </li>
                  <li className="transition-all border-b border-transparent hover:border-blue-500">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="hidden lg:flex items-center">
                <button>Login</button>
                <span class="mx-6 text-white/20"> | </span>
                <button className="bg-blue-500 rounded-full py-1 px-4">
                  Register
                </button>
              </div>
            </div>

            <>
              {!isOpen ? (
                <img
                  src={hamburgerMenu}
                  alt=""
                  className="lg:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <div
                  className="top-5 right-10 absolute text-3xl cursor-pointer z-20"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  x
                </div>
              )}
              <div
                className={`flex flex-col justify-center items-center gap-x-[2rem] absolute top-0 left-0 bg-[#3e5a94] p-4 w-full h-full z-10 lg:hidden ${
                  isOpen ? "top-20px" : "top-[-800px]"
                } ease-in-out duration-500 `}
              >
                <nav className="flex justify-center items-center text-center">
                  <ul className="flex flex-col space-y-10 gap-x-[1.5rem] text-2xl cursor-pointer">
                    <li className="transition-all border-b border-transparent hover:border-blue-500">
                      <a href="#products">Products</a>
                    </li>
                    <li className="transition-all border-b border-transparent hover:border-blue-500">
                      <a href="#features">Features</a>
                    </li>
                    <li className="transition-all border-b border-transparent hover:border-blue-500">
                      <a href="#about">About</a>
                    </li>
                    <li className="transition-all border-b border-transparent hover:border-blue-500">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className="flex justify-center mt-10 items-center text-2xl">
                  <button>Login</button>
                  <span class="mx-6 text-white/20"> | </span>
                  <button className="bg-blue-500 rounded-full py-1 px-4">
                    Register
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
