import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCurrentLocation from "../customHookForLocation/useCurrentLocation";

const NavBar = () => {
  /* I use here useLocation() to get the current location dynamically for styling the active link in the navbar. useLocation captures the current path, and based on that, I determine which path is active.Then, I update the state with the active path by conditional statement. Then use a ternary operator to apply the appropriate style to the corresponding link.*/
  const [activeLink, setActiveLink] = useState(""); //default is 'home'
  const path = useCurrentLocation();
  useEffect(() => {
    if (path === "/") {
      setActiveLink("home");
    } else if (path === "/donation") {
      setActiveLink("donation");
    } else if (path === "/statistics") {
      setActiveLink("statistics");
    }
  }, [path]);
  return (
    <nav className="navbar justify-between bg-[rgba(255,255,255,0.95)] px-5 md:px-14 lg:px-32 pt-3 md:pt-8">
      <div className="navbar-start justify-between w-full md:w-auto">
        <div className="dropdown z-20">
          {/* this dropdown use for mobile device and hide in medium device */}
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-xs dropdown-content bg-base-100 rounded-box z-[1] mt-1 w-32 p-2 shadow"
          >
            {/* here I use a css style(activeLink) which define in the App.css */}
            <li>
              <Link
                to="/"
                className={activeLink === "home" ? "activeLink" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/donation"
                className={activeLink === "donation" ? "activeLink" : ""}
              >
                Donation
              </Link>
            </li>
            <li>
              <Link
                to="/statistics"
                className={activeLink === "statistics" ? "activeLink" : ""}
              >
                Statistics
              </Link>
            </li>
          </ul>
        </div>

        <img
          src="/resource/Logo.png"
          className="w-[90px] md:w-[140px] lg:w-[240px] h-[30px] md:h-[45px] lg:h-[70px]"
          alt="Logo"
        />
      </div>
      {/* this dropdown use for medium device and hide in mobile device */}
      <div className="navbar-center hidden md:flex lg:ml-10">
        <ul className="menu menu-horizontal space-x-4 px-1">
          <li>
            <Link to="/" className={activeLink === "home" ? "activeLink" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/donation"
              className={activeLink === "donation" ? "activeLink" : ""}
            >
              Donation
            </Link>
          </li>
          <li>
            <Link
              to="/statistics"
              className={activeLink === "statistics" ? "activeLink" : ""}
            >
              Statistics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
