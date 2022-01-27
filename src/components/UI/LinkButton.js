import { openLinkInNewTab } from "../helpers/global-functions";
const LinkButton = (props) => {
  return (
    <button
      onClick={() => {
        openLinkInNewTab(props.link);
      }}
      className={`${props.className} text-slate-100 p-2 rounded-md drop-shadow-md `}
    >
      {props.buttonText}
    </button>
  );
};

export default LinkButton;
