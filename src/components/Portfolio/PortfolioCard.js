import Card from "../UI/Card";
import LinkButton from "../UI/LinkButton";

const PortfolioCard = (props) => {
  return (
    <Card className="bg-slate-400 min-w-full whitespace-pre-line p-6">
      <ul>
        <li className="font-bold text-gray-800 text-l mb-2">{props.project.name}</li>
        <li className="italic text-slate-100 mb-2">{props.project.stack}</li>
        <li className="mb-2">{props.project.description}</li>
        <div className="flex flex-row gap-4 justify-center">
          {props.project.liveLink && (
            <li>
              <LinkButton
                buttonText="Live Link"
                className={"bg-emerald-700 hover:bg-emerald-900 hover:drop-shadow-lg"}
                link={props.project.liveLink}
              />
            </li>
          )}

          {props.project.frontEndRepo && (
            <li>
              <LinkButton
                buttonText="F/E Repo"
                className={"bg-gray-500 hover:bg-gray-700 hover:drop-shadow-lg"}
                link={props.project.frontEndRepo}
              />
            </li>
          )}

          {props.project.backEndRepo && (
            <li>
              <LinkButton
                buttonText="B/E Repo"
                className={"bg-gray-500 hover:bg-gray-700 hover:drop-shadow-lg"}
                link={props.project.backEndRepo}
              />
            </li>
          )}
        </div>
      </ul>
    </Card>
  );
};

export default PortfolioCard;
