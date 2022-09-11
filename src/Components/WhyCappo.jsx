import illustration from "../Assets/Illustration2.png";

const WhyCappo = () => {
  return (
    <div className="px-4">
      <div className="container mx-auto text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div>
            <img
              src={illustration}
              alt=""
              data-aos="zoom-in"
              data-aos-offset="300"
            />
          </div>

          <div className="mt-6">
            <p className="text-4xl max-w-[30rem]">
              Why you should choose CRAPPO
            </p>
            <p className="text-md max-w-[25rem] py-4">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className="bg-blue-500 rounded-full p-4 mt-4">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <section className="pt-14">
        <div className="container mx-auto">
          <div class="text-white text-center">
            <h2
              data-aos="fade-up"
              // data-aos-offset="220"
              class="text-center capitalize mb-5 font-semibold text-2xl aos-init aos-animate"
            >
              Check how much you can earn
            </h2>
            <p
              data-aos="fade-up"
              // data-aos-offset="230"
              class="text-gray-400 text-xs text-center aos-init aos-animate"
            >
              Let's check your hash rate to see how much you will earn today,
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div
            className="bg-white max-w-[58rem] rounded-2xl p-5 mx-auto lg:p-12 shadow-md relative z-10 top-[8rem]"
            data-aos="zoom-in"
          >
            <form className="flex flex-col space-y-12 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-3">
              <input
                type="text"
                placeholder="Enter your hash rate"
                className="lg:w-[25rem] outline-none border-b-2 border-gray-400"
              />
              <select className="lg:w-[12.5rem] outline-none border-b-2 border-gray-400">
                <option>TH/s</option>
                <option>H/s</option>
                <option>KH/s</option>
                <option>MH/s</option>
                <option>GH/s</option>
              </select>
              <button className="flex self-start text-white bg-blue-600 rounded-full py-2 px-6">
                Calculate
              </button>
            </form>
            <div className="mt-6">
              <p className="text-blue-500 uppercase mb-4">
                ESTIMATED 24 HOUR REVENUE:
              </p>
              <p className="font-bold mb-4">
                0.055 130 59 ETH{" "}
                <span className="text-blue-500 font-bold">($1275)</span>
              </p>
              <p className="text-xs text-gray-400">
                Revenue will change based on mining difficulty and Ethereum
                price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCappo;
