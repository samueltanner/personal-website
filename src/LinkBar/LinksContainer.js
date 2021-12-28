import SquareButton from "../components/UI/SquareButton";
import { MailIcon, TerminalIcon, UserCircleIcon, ViewListIcon } from "@heroicons/react/outline";
import { links } from "../utils/constants";
const LinksContainer = (props) => {
  const openLinkInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="absolute bottom-3 inset-x-0 flex flex-wrap justify-center gap-4">
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
