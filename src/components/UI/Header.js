import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="w-full bg-slate-800 p-4 text-white">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dogs">Dogs Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
