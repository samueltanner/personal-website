import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="w-full bg-slate-800 p-4 text-white">
      <ul>
        <li className="flex flex-wrap gap-5">
          <Link to="/">Home</Link>
          <Link to="/dogs">Dogs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
