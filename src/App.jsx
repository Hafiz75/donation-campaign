import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./components/Root";
import Home from "./components/home/Home";
import CategoryDetails from "./components/category/categoryDetailsAndUtilities/CategoryDetails";
import ShowDonatedItems from "./components/donated/ShowDonatedItems";
import { getItems } from "./components/utilities/utilities";
import Statistics from "./components/statistics/Statistics";

/* here I use context for handleSearchInpValue function will available in all child of Root */
export const giveSearch = createContext();
const App = () => {
  /* save search text from Banner component call by handleSearchInp function by useContext in Banner component */
  const [searchInpValue, setSearchInpValue] = useState("");
  /* here I use state for tracking Donation amount clicking by a button in CategoryAndDetails component */
  const [yourDonation, setYourDonation] = useState(0);
  /* this state will help me hide banner by condition  and this state change by calling 'handleDisableBanner' function. which define in App component and call in Home component by condition. */
  const [disableBanner, setDisableBanner] = useState(false);
  /* this function has called in the Banner component by useContext */
  function handleSearchInp(inpVal) {
    setSearchInpValue(inpVal);
  }
  /* this function has called in the Home component  */
  function resetSearchInpValue() {
    setSearchInpValue("");
  }
  /* this function has called in the Home component for hide banner. when we are in different path this banner will invisible. but when path is '/' this banner show us. In this time when we search to inappropriate text and after that I want to show a message and hide this banner. but this will not happen because path is still '/' . so in this condition I use this function for take boolean value by conditional statement in Banner component and set it into above disableBanner state */
  function handleDisableBanner(bool) {
    setDisableBanner(bool);
  }
  /* this variable has faked data and this data use in Statistics component for showing in pie chart */
  const totalDonation = 500;
  /* here I declare a function. this function show us update data in the pie chart of 'Your Donation'. when we click the 'Statistics' button of the nav as a result run this function by useEffect automatically and show update data   */
  const updateDonationAmount = () => {
    /* getItems is a function which define in the utilities.js. this function use for take value from localStorage. */
    const donationAmount = getItems("donationAmount");
    setYourDonation(donationAmount);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <giveSearch.Provider value={handleSearchInp}>
          <Root disableBanner={disableBanner} />
        </giveSearch.Provider>
      ),
      children: [
        {
          path: "/",
          element: (
            <Home
              searchInpValue={searchInpValue}
              resetSearchInpValue={resetSearchInpValue}
              handleDisableBanner={handleDisableBanner}
            />
          ),
          loader: () => fetch("/data.json"),
        },
        {
          path: "/category/:id",
          element: <CategoryDetails />,
          loader: async ({ params }) => {
            const data = await fetch("/data.json").then((res) => res.json());

            const clickedItem = data.find((item) => item.id == params.id);
            return clickedItem;
          },
        },
        {
          path: "/donation",
          element: <ShowDonatedItems />,
          loader: async () => {
            const data = await fetch("/data.json").then((res) => res.json());
            /* I get id by calling getId function which defined in utilities.js. I will get id from localStorage by call this getItems() */
            const savedIds = getItems("donationId");
            /* here data's item's id check with savedIds by filter. if match two ids return this item and save into donated variable */
            const donated = data.filter((item) =>
              savedIds.find((savedId) => savedId == item.id)
            );
            return donated;
          },
        },
        {
          path: "/statistics",
          element: (
            <Statistics
              yourDonation={yourDonation}
              totalDonation={totalDonation}
              /* I sent this function for taking update data of 'yourDonation' and 'totalDonation' */
              updateDonationAmount={updateDonationAmount}
            />
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
