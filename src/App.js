import { useState } from "react";
import "./App.css";
import JobCard from "./components/JobDescription/JobCard";
import Profile from "./components/Profile/Profile";
import Timeline from "./components/Timeline/Timeline";
import ContactCard from "./ContactBar/ContactCard";

function App() {
  const [job, setCurrentJob] = useState(0);
  const [showContactCard, toggleContactCard] = useState(false);
  const selectJob = (job) => {
    setCurrentJob(job);
  };
  const toggleContact = () => {
    console.log("toggle contact");
    toggleContactCard(!showContactCard);
  };

  return (
    <div className="h-screen bg-grey md:flex gap-0">
      <div className="flex flex-col p-2 md:w-1/2">
        <Profile toggleContact={toggleContact} showContactCard={showContactCard} />
        {showContactCard ? <ContactCard toggleContact={toggleContactCard} /> : <JobCard currentJob={job} />}
      </div>
      <div className="mt-3 md:mt-0 flex-1 flex overflow-hidden pt-2">
        <div className="md:flex-1 mx-auto lg:overflow-y-scroll">
          <Timeline selectJob={selectJob} toggleContact={toggleContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
