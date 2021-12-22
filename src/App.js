import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Profile/Card";
import Profile from "./components/Profile/Profile";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="min-h-screen bg-grey py-6 px-8 grid grid-cols-2 gap-4">
      <Profile />
      <Timeline />
    </div>
  );
}

export default App;
