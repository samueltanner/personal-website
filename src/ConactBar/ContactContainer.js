import SquareButton from "../components/UI/SquareButton";
import { MailIcon, TerminalIcon, UserCircleIcon } from "@heroicons/react/outline";

const ContactContainer = (props) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <SquareButton icon={<MailIcon className="h-5 w-5 " />} />
      <SquareButton icon={<UserCircleIcon className="h-5 w-5" />} />
      <SquareButton icon={<TerminalIcon className="h-5 w-5" />} />
    </div>
  );
};

export default ContactContainer;
