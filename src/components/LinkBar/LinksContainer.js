import SquareButton from "../UI/SquareButton";
import { MailIcon, TerminalIcon, UserCircleIcon, ViewListIcon } from "@heroicons/react/outline";
import { links } from "../../utils/constants";
import { openLinkInNewTab } from "../helpers/global-functions";
const LinksContainer = (props) => {
  return (
    <div className="flex flex-row justify-center gap-4 mt-auto">
      {props.showContactCard ? (
        <SquareButton icon={<ViewListIcon className="h-5 w-5 " />} onClick={props.toggleContact} />
      ) : (
        <SquareButton icon={<MailIcon className="h-5 w-5 " />} onClick={props.toggleContact} />
      )}
      <SquareButton
        icon={<UserCircleIcon className="h-5 w-5" />}
        onClick={() => {
          openLinkInNewTab(links.linkedIn);
        }}
      />
      <SquareButton
        icon={<TerminalIcon className="h-5 w-5" />}
        onClick={() => {
          openLinkInNewTab(links.github);
        }}
      />
    </div>
  );
};

export default LinksContainer;
