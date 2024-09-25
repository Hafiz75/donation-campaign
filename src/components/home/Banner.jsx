import { useContext, useState } from "react";
import { giveSearch } from "../../App";

const Banner = () => {
  const [inpVal, setInpVal] = useState("");
  /* this context comes from App component */
  const handleSearchInp = useContext(giveSearch);
  function handleWhatSearchInBtn() {
    handleSearchInp(inpVal);
    setInpVal("");
  }
  console.log("Banner component run");
  return (
    <div className="pt-8 md:pt-16 lg:pt-28 pb-14 md:pb-28 lg:pb-44 mb-5 md:mb-14 lg:mb-20">
      <h3 className="text-[#0B0B0B] text-center text-lg md:text-3xl lg:text-5xl font-medium md:font-bold mb-6 md:mb-10 z-20">
        I Grow By Helping People In Need
      </h3>
      <div className="flex justify-center">
        <input
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
          className="bg-[#FFF] border border-[#DEDEDE] rounded-s-lg w-[160px] md:w-[300px] text-sm py-1 md:py-3 pl-2 md:pl-3 z-20"
          type="text"
          placeholder="Search here....."
        />
        <button
          onClick={handleWhatSearchInBtn}
          className="bg-[#FF444A] text-white font-semibold rounded-e-lg px-2 md:px-6 py-1 md:py-3 z-20"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
