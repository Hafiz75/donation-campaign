import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Banner from "./home/Banner";
import useCurrentLocation from "./customHookForLocation/useCurrentLocation";
/* this prop is a state comes from App component. its value change when the handleDisableBanner function will run. this function call in the Home component by condition. this set 'true' or 'false' value in the disableBanner state in  App component. */
const Root = ({ disableBanner }) => {
  /* initial point showBanner is true. as a result Banner component will appear */
  const [showBanner, setShowBanner] = useState(true);
  /* this special function is declared in the customHookForLocation's folder */
  const path = useCurrentLocation();
  /* this useEffect will run when path or disableBanner changes */
  useEffect(() => {
    if (path === "/") {
      /* when we search inappropriate text show us a message and disable banner. disableBanner's value set in the Home component by condition. */
      if (disableBanner) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    } else {
    /* when we r in other path banner will be hide */
      setShowBanner(false);
    }
  }, [path, disableBanner]);

  return (
    /*  here I use this 'div' for react multi component rules and this div also container of NavBar, Banner and Outlet.this outlet will show Home, ShowDonatedItem and Statistics component. */
    <div>
      {/* container of NavBar and Banner. here I use this div for positioning */}
      <div className="relative">
        {/* this div has a background image and this image import from tailwind.config.js name as 'bgImg'. this div takeover nav and banner by setting absolute */}
        <div
          className={`bg-bgImg bg-cover absolute inset-0 opacity-10 z-0 ${
            showBanner ? "visible" : "hidden"
          }`}
        ></div>
        <NavBar />
        <div className={showBanner ? "visible" : "hidden"}>
          <Banner />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
