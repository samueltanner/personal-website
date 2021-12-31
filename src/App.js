import { useState } from "react";
import "./App.css";
import JobCard from "./components/JobDescription/JobCard";
import Profile from "./components/Profile/Profile";
import Timeline from "./components/Timeline/Timeline";
import ContactCard from "./components/ContactCard/ContactCard";
import FooterMenuCard from "./components/FooterMenu/FooterMenuCard";
import Skills from "./components/Skills/Skills";

function App() {
  const [job, setCurrentJob] = useState(0);
  const [showContactCard, toggleContactCard] = useState(false);
  const [currentWindow, setCurrentWindow] = useState("timeline");
  const selectJob = (job) => {
    setCurrentJob(job);
  };

  const toggleContact = () => {
    toggleContactCard(!showContactCard);
  };

  const setWindow = (selection) => {
    setCurrentWindow(selection);

    if (selection !== "timeline") {
      toggleContactCard(true);
    }

    if (selection === "timeline") {
      toggleContactCard(false);
    }
  };

  return (
    <div className="h-screen bg-grey md:flex scrollbar-hide">
      <div className="flex flex-col py-3 pl-2 gap-2 md:w-1/2" id="profile">
        <Profile toggleContact={toggleContact} showContactCard={showContactCard} />
        {showContactCard ? <ContactCard toggleContact={toggleContactCard} /> : <JobCard currentJob={job} />}
      </div>
      <div className="mt-3 md:mt-0 flex-1 flex md:overflow-hidden pt-0 px-3">
        <div className="relative md:flex-1  w-full md:overflow-y-scroll p-0 ">
          <FooterMenuCard className="z-50 sticky top-3 visible md:hidden mx-3 mt-0" setWindow={setWindow} />
          {currentWindow === "skills" && <Skills />}
          {currentWindow === "timeline" && (
            <Timeline selectJob={selectJob} toggleContact={toggleContact} showContactCard={showContactCard} />
          )}
        </div>
      </div>
      <div className="hidden md:block">
        <FooterMenuCard setWindow={setWindow} />
      </div>
    </div>
  );
}

export default App;
