import { useState } from "react";

const FooterMenuCard = (props) => {
  const [menuItem, setCurrentMenuItem] = useState("timeline");

  const handleMenuSelection = (event) => {
    setCurrentMenuItem(event.target.value);
    props.setCurrentWindow(event.target.value);
  };

  // const handleSeeTimeline = () => {
  //   console.log()
  //   setCurrentMenuItem("timeline");
  //   // props.setCurrentWindow("timeline");
  // };
  // const handleSeeSkills = () => {
  //   setCurrentMenuItem("skills");
  //   // props.setCurrentWindow("skills");
  // };

  return (
    <div
      className={`bg-slate-200 rounded-xl drop-shadow-lg z-20 left-2 right-2 mx-3 md:left-1/2  md:right-1 md:fixed md:bottom-3 ${props.className} `}
    >
      <div className="flex flex-row gap-6 justify-around p-3 ">
        <button
          value="timeline"
          className={`${menuItem === "timeline" ? "font-bold" : "font-normal"} w-1/2`}
          onClick={handleMenuSelection}
        >
          Work History
        </button>
        <button
          value="skills"
          className={`${menuItem === "skills" ? "font-bold" : "font-normal"} w-1/2`}
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
