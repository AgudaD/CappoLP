import chart from "../Assets/Chart.svg";
import statistics from "../Assets/Statistic.svg";
import table from "../Assets/Table.svg";

const Stocks = () => {
  return (
    <div>
      <div className="container mx-auto px-4 mb-10">
        <div className="flex items-center justify-center mt-[6rem]">
          <h2 className="text-white text-bold text-3xl text-center max-w-[550px]">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h2>
        </div>

        <div className="text-white mt-[6rem] flex flex-col gap-[8rem]">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div>
              <p className="text-3xl font-bold mb-4">Invest Smart</p>
              <p className="text-sm text-gray-400 font-medium max-w-[355px] mb-6">
                Get full statistic information about the behaviour of buyers and
                sellers will help you to make the decision.
              </p>
              <button
                className="bg-blue-500 rounded-full px-4 py-2"
                data-aos="fade-left"
                data-aos-offset="300"
              >
                Learn More
              </button>
            </div>
            <div className="mt-6 lg:mt-0">
              <img src={chart} alt="" data-aos="zoom-in" />
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row items-start justify-between">
            <div>
              <img src={statistics} alt="" data-aos="zoom-in" />
            </div>
            <div>
              <p className="text-3xl font-bold mb-4">Detailed Statistics</p>
              <p className="text-sm text-gray-400 font-medium max-w-[355px] mb-6">
                View all mining related information in realtime, at any point at
                any location and decide which polls you want to mine in.
              </p>
              <button
                className="bg-blue-500 rounded-full px-4 py-2"
                data-aos="fade-left"
                data-aos-offset="300"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div>
              <p className="text-3xl font-bold mb-4 max-w-[400px]">
                Grow your profit and track your investments
              </p>
              <p className="text-sm text-gray-400 font-medium max-w-[355px] mb-6">
                Use advanced analytical tools. Clear TradingView charts let you
                track current and historical profit investments.
              </p>
              <button
                className="bg-blue-500 rounded-full px-4 py-2"
                data-aos="fade-left"
                data-aos-offset="300"
              >
                Learn More
              </button>
            </div>
            <div className="mt-6 lg:mt-0">
              <img src={table} alt="" data-aos="zoom-in" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
