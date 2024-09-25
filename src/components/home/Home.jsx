import { useLoaderData } from "react-router-dom";

import Category from "../category/Category";
/* these props come from App component */
const Home = ({ searchInpValue, resetSearchInpValue, handleDisableBanner }) => {
  /* load data from App.jsx */
  const data = useLoaderData();
  /* filtering data according to the search input. this search text carry here by searchInpValue prop */
  const modifiedData =
    searchInpValue.trim() === ""
      ? data
      : data.filter((card) =>
          card.title.toLowerCase().includes(searchInpValue.toLowerCase())
        );
  /* this function will set disableBanner(App component) state's value true or false and send this state in the Root component and hide banner by condition.  */
  modifiedData.length == 0
    ? handleDisableBanner(true)
    : handleDisableBanner(false);
  console.log("Home component run");
  return (
    <>
      {modifiedData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-3 md:pt-12 px-3 md:px-16 lg:px-28 mb-5 md:mb-24 lg:mb-36">
          {modifiedData.map((card, idx) => (
            <Category card={card} key={idx} />
          ))}
        </div>
      ) : (
        /* show this message and button when search in wrong input */
        <div className="flex flex-col justify-center items-center gap-5 min-h-[70vh]">
          <h3 className="text-2xl md:text-5xl font-bold">
            Please Search Appropriate Letter
          </h3>
          {/* when we click this button reset the state's value of searchInputValue into empty string. here call a function which define in the App component */}
          <button
            onClick={resetSearchInpValue}
            className="bg-[#009444] text-white font-semibold px-3 md:px-6 py-[6px] md:py-3 rounded-lg"
          >
            Back To Home
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
