import { projects } from "../../utils/constants";
import PortfolioCard from "./PortfolioCard";

const reverse_projects = projects.reverse();

const Portfolio = (props) => {
  return (
    <div className="mt-3 flex flex-wrap justify-center md:mb-20 gap-2 drop-shadow-md">
      {reverse_projects.map((project, index) => (
        <PortfolioCard project={project} key={index} />
      ))}
    </div>
  );
};

export default Portfolio;
