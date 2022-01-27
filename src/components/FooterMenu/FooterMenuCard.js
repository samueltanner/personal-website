import { useState, useContext } from "react";
import GlobalContext from "../Context/global-context";

const FooterMenuCard = (props) => {
  const { currentWindow, setCurrentWindow } = useContext(GlobalContext);

  const handleMenuSelection = (event) => {
    setCurrentWindow(event.target.value);
  };

  return (
    <div
      className={`bg-slate-200 rounded-xl drop-shadow-lg z-20 left-2 right-2 mx-3 md:left-1/2  md:right-1 md:fixed md:bottom-3 ${props.className} `}
    >
      <div className="flex flex-row gap-6 justify-around p-3 ">
        <button
          value="timeline"
          className={`${currentWindow === "timeline" ? "font-bold" : "font-normal"} w-1/2`}
          onClick={handleMenuSelection}
        >
          Work History
        </button>
        <button
          value="skills"
          className={`${currentWindow === "skills" ? "font-bold" : "font-normal"} w-1/2`}
          onClick={handleMenuSelection}
        >
          Skills
        </button>
        <button
          value="portfolio"
          className={`${currentWindow === "portfolio" ? "font-bold" : "font-normal"} w-1/2`}
          onClick={handleMenuSelection}
        >
          Portfolio
        </button>
      </div>
    </div>
  );
};

export default FooterMenuCard;
