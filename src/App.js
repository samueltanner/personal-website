import { useState } from "react";
import "./App.css";
import JobCard from "./components/JobDescription/JobCard";
import Profile from "./components/Profile/Profile";
import Timeline from "./components/Timeline/Timeline";
import ContactCard from "./components/ContactCard/ContactCard";
import FooterMenuCard from "./components/FooterMenu/FooterMenuCard";

function App() {
  const [job, setCurrentJob] = useState(0);
  const [showContactCard, toggleContactCard] = useState(false);
  const selectJob = (job) => {
    setCurrentJob(job);
  };
  const toggleContact = () => {
    toggleContactCard(!showContactCard);
  };

  return (
    <div className="h-screen bg-grey md:flex gap-0">
      <div className="flex flex-col p-2 md:w-1/2" id="profile">
        <Profile toggleContact={toggleContact} showContactCard={showContactCard} />
        {showContactCard ? <ContactCard toggleContact={toggleContactCard} /> : <JobCard currentJob={job} />}
        <FooterMenuCard className="visible md:hidden mx-1 mt-1" />
      </div>
      <div className=" mt-3 md:mt-0 flex-1 flex overflow-hidden pt-2">
        <div className="relative md:flex-1 mx-auto overflow-y-scroll ">
          <Timeline selectJob={selectJob} toggleContact={toggleContact} showContactCard={showContactCard} />
        </div>
      </div>
      <FooterMenuCard className="invisible h-0 md:visible md:h-auto" />
    </div>
  );
}

export default App;
