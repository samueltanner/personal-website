import { useState } from "react";

const FooterMenuCard = (props) => {
  const [selectedOption, setSelectedOption] = useState("timeline");

  const handleSelectWindow = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleMenuSelection = (event) => {
    props.setWindow(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className={`bg-slate-200 rounded-xl drop-shadow-lg z-20 left-2 right-2 mx-3 md:left-1/2  md:right-3 md:fixed md:bottom-3 ${props.className} `}
    >
      <div className="flex flex-row gap-6 justify-around p-3 ">
        <button
          value="timeline"
          className={`${selectedOption == "timeline" ? "font-bold" : "font-normal"} w-1/2`}
          onClick={handleMenuSelection}
        >
          Work History
        </button>
        <button
          value="skills"
          className={`${selectedOption === "skills" ? "font-bold" : "font-normal"} w-1/2`}
          onClick={handleMenuSelection}
        >
          Skills
        </button>
        {/* <button value="portfolio" onClick={handleMenuSelection}>
          Portfolio
        </button> */}
      </div>
    </div>
  );
};

export default FooterMenuCard;
