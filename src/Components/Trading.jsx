import bitcoin from "../Assets/bitcoin.png";
import arrowRight from "../Assets/Arrow Right.svg";
import ethereum from "../Assets/ethereum.png";
import litecoin from "../Assets/litecoin.png";

const Trading = () => {
  return (
    <div>
      <div className="bg-white w-full pt-[15rem] pb-10">
        <h2 className="text-2xl text-center capitalize font-semibold mb-16 px-6">
          Trade securely and market the high growth cryptocurrencies.
        </h2>

        <div className="container mx-auto px-6 flex flex-col gap-[3rem] lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="bg-[#2b076e] shadow-md rounded-2xl py-12 px-6">
            <div className="flex flex-col items-center justify-center">
              <img src={bitcoin} alt="" className="mb-10" />
              <p className="text-white text-2xl font-semibold mb-6">
                Bitcoin <span className="text-xs text-gray-400 ">BTC</span>
              </p>
              <p className="text-white text-center mb-4">
                Digital currency in which a record of transactions is
                maintained.
              </p>
              <button className="text-white flex items-center gap-5 bg-blue-500 rounded-full px-6 py-4">
                Start mining
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
          <div className="py-12 px-6 bg-white shadow-md rounded-2xl ">
            <div className="flex flex-col items-center justify-center">
              <img src={ethereum} alt="" className="mb-10" />
              <p className="text-black text-2xl font-semibold mb-6">
                Ethereum <span className="text-xs text-gray-400 ">ETH</span>
              </p>
              <p className="text-black text-center mb-4">
                Blockchain technology to create and run decentralized digital
                applications.
              </p>
              <button className="text-black flex items-center gap-5 rounded-full border-2 border-gray-300">
                <img
                  src={arrowRight}
                  alt=""
                  className="w-[3.5rem] h-[3.5rem]"
                />
              </button>
            </div>
          </div>
          <div className="py-12 px-6 bg-white shadow-md rounded-2xl">
            <div className="flex flex-col items-center justify-center">
              <img src={litecoin} alt="" className="mb-10" />
              <p className="text-black text-2xl font-semibold mb-6">
                Litecoin <span className="text-xs text-gray-400 ">LTC</span>
              </p>
              <p className="text-black text-center mb-4">
                Cryptocurrency that enables instant payments to anyone in the
                world.
              </p>
              <button className="text-black flex items-center gap-5 rounded-full border-2 border-gray-300">
                <img
                  src={arrowRight}
                  alt=""
                  className="w-[3.5rem] h-[3.5rem]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
