import "./App.css";
import Profile from "./components/Profile/Profile";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="h-screen bg-grey py-6 px-10 md:flex gap-4">
      <div className="md:w-1/3">
        <Profile />
        {/* <Profile /> */}
      </div>
      <div className="mt-3 md:mt-0 flex-1 flex overflow-hidden">
        <div className="md:flex-1 overflow-y-scroll ">
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default App;
