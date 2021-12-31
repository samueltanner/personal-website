import { useState } from "react";
import FooterMenuCard from "../FooterMenu/FooterMenuCard";
import Skills from "../Skills/Skills";
import Timeline from "../Timeline/Timeline";

const ScrollyWindowContainer = (props) => {
  const [currentWindow, setCurrentWindow] = useState("timeline");

  const setWindow = (selection) => {
    setCurrentWindow(selection);

    // if (selection !== "timeline") {
    //   toggleContactCard(true);
    // }

    // if (selection === "timeline") {
    //   toggleContactCard(false);
    // }
  };

  // const handleSelectJob = () => {
  //   props.selectJob();
  // };

  return (
    <div className={`${props.className}`}>
      <FooterMenuCard
        className="z-50 sticky top-3 visible md:hidden mx-3 mt-0 "
        setCurrentWindow={setWindow}
        // currentWindow={currentWindow}
      />
      {currentWindow === "skills" && <Skills />}
      {currentWindow === "timeline" && (
        <Timeline
          selectJob={props.selectJob}
          toggleContact={props.toggleContact}
          showContactCard={props.showContactCard}
        />
      )}
    </div>
  );
};

export default ScrollyWindowContainer;
