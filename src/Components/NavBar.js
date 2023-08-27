import React from "react";
import {AiFillSetting} from "react-icons/ai";
import {MdLightMode, MdModeNight} from "react-icons/md";
import {BsFillBellFill} from "react-icons/bs";
import {BiSearch} from 'react-icons/bi'

function NavBar() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <nav id="nav">
        <div className="nav">
          <div className="navLeft">
          <div className="NavLogo">
            <span className="carrer">Carrer</span>&nbsp;
            <span className="path">Path</span>
          </div>

          <div className="SearchBar">
            <BiSearch className="search-icon"/><input type="text" placeholder="Search Your Carrer Path" />
          </div>
          </div>
          <div className="NavMenu">
            <span className="setting">
              <AiFillSetting />
            </span>
            <span className="mode">
              {isDarkMode ? <MdModeNight /> : <MdLightMode />}
              <button onClick={toggleDarkMode}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </span>
            <span className="notification">
              <BsFillBellFill />
            </span>
            <span className="avtar">
              <img src="/iemhacks_JH-02/images/Icons/avatar.svg" alt="avtar"/>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
