import "./App.css";
import JobCard from "./components/JobDescription/JobCard";
import Profile from "./components/Profile/Profile";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="h-screen bg-grey   md:flex gap-4">
      <div className="flex flex-col gap-2 p-2 md:w-1/2">
        <Profile />
        <JobCard />
      </div>
      <div className="mt-3 md:mt-0 flex-1 flex overflow-hidden pt-2">
        <div className="md:flex-1 overflow-y-scroll px-1">
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default App;
