import { useState } from "react";
import "./App.css";
import JobCard from "./components/JobDescription/JobCard";
import Profile from "./components/Profile/Profile";
import ContactCard from "./components/ContactCard/ContactCard";
import ScrollyWindowContainer from "./components/ComponentContainer/ScrollyWindowContainer";
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
    <div className="h-screen bg-grey md:flex scrollbar-hide">
      <div className="flex flex-col px-2 md:py-3 md:mr-0 md:ml-2 gap-2 md:w-1/2" id="profile">
        <Profile toggleContact={toggleContact} showContactCard={showContactCard} />
        {showContactCard ? <ContactCard toggleContact={toggleContactCard} /> : <JobCard currentJob={job} />}
      </div>
      <div className="mt-3 md:mt-0 flex-1 flex md:overflow-hidden pt-0 px-3">
        <ScrollyWindowContainer
          className="relative md:flex-1 w-full md:overflow-y-scroll p-0"
          selectJob={selectJob}
          showContactCard={showContactCard}
          toggleContact={toggleContact}
        />
      </div>
    </div>
  );
}

export default App;
