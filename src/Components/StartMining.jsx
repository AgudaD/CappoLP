const StartMining = () => {
  return (
    <div>
      <div className="container mx-auto text-white px-6 mt-[6.25rem] mb-[5.5rem]">
        <div className="flex flex-col  justify-between py-6 px-6 lg:flex-row lg:items-center bg-[#3671E9] rounded-2xl lg:px-10 lg:py-[3rem]">
          <div>
            <p className="font-bold text-2xl mb-4">Start mining now</p>
            <p className="max-w-[340px] text-gray-300">
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>

          <div className="flex flex-col py-5  gap-[2.5rem] lg:flex-row">
            <input
              type="text"
              placeholder="Enter your email"
              className="placeholder-white outline-none w-full lg:w-[23rem] bg-transparent border-b-2"
            />
            <button className="flex self-center bg-white text-black text-semibold rounded-full px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMining;
