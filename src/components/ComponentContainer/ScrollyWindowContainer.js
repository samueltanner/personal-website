import { useState, useContext } from "react";
import FooterMenuCard from "../FooterMenu/FooterMenuCard";
import Skills from "../Skills/Skills";
import Timeline from "../Timeline/Timeline";
import Portfolio from "../Portfolio/Portfolio";
import GlobalContext from "../Context/global-context";

const ScrollyWindowContainer = (props) => {
  const [currentWindow, setCurrentWindow] = useState("timeline");
  const value = { currentWindow, setCurrentWindow };

  return (
    <GlobalContext.Provider value={value}>
      <div className={`${props.className}`}>
        <FooterMenuCard className="z-50 sticky top-3 visible md:hidden mx-3 mt-0 " />
        {currentWindow === "skills" && <Skills />}
        {currentWindow === "timeline" && (
          <Timeline
            selectJob={props.selectJob}
            toggleContact={props.toggleContact}
            showContactCard={props.showContactCard}
          />
        )}
        {currentWindow === "portfolio" && <Portfolio />}
        <div className="hidden md:block">
          <FooterMenuCard />
        </div>
      </div>
    </GlobalContext.Provider>
  );
};

export default ScrollyWindowContainer;
