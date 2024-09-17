
import { useState } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Home')
    function handleActiveLink(params) {
        setActiveLink(params)
    }
  return (
    <nav className="navbar justify-between bg-[rgba(255,255,255,0.95)] px-5 md:px-14 lg:px-32 pt-3 md:pt-12">
      <div className="navbar-start justify-between w-full md:w-auto">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* here menu style 'activeLink' come from App.css */}
             <Link to = '/'>
             <li>
              <a onClick={()=> handleActiveLink('Home')} className={activeLink == 'Home'? 'activeLink' : '' }>Home</a>
            </li>
             </Link>
            <li>
              <a onClick={()=> handleActiveLink('Donation')} className={activeLink == 'Donation'? 'activeLink' : '' }>Donation</a>
            </li>
            <li>
              <a onClick={()=> handleActiveLink('Statistics')} className={activeLink == 'Statistics'? 'activeLink' : '' }>Statistics</a>
            </li>
          </ul>
        </div>
        <img src='/resource/Logo.png' className='w-[90px] md:w-[140px] lg:w-[240px] h-[30px] md:h-[45px] lg:h-[70px]' alt="Logo" />
      </div>
      <div className="navbar-center hidden md:flex lg:ml-10">
        <ul className="menu menu-horizontal space-x-4 px-1">
            {/* here menu style 'activeLink' come from App.css */}
            <Link to = '/'>
             <li>
              <a onClick={()=> handleActiveLink('Home')} className={activeLink == 'Home'? 'activeLink' : '' }>Home</a>
            </li>
             </Link>
            <li>
              <a onClick={()=> handleActiveLink('Donation')} className={activeLink == 'Donation'? 'activeLink' : '' }>Donation</a>
            </li>
            <li>
              <a onClick={()=> handleActiveLink('Statistics')} className={activeLink == 'Statistics'? 'activeLink' : '' }>Statistics</a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
