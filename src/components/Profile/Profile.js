import Card from "../UI/Card";
import ProfileImage from "./ProfileImage";

import { profile } from "../../utils/constants";
import LinksContainer from "../LinkBar/LinksContainer";

const Profile = (props) => {
  return (
    <Card className="flex flex-col w-full mt-auto gap-2 align-baseline bg-slate-200 drop-shadow-lg sm:h-1/2 ">
      <ProfileImage />
      <div className="flex flex-wrap">
        <p className="font-bold ml-2">{profile.name}</p>
        <p className="italic ml-2"> | {profile.title}</p>
      </div>
      <p className=" mx-2 mb-12">"{profile.blurb}"</p>
      <LinksContainer toggleContact={props.toggleContact} showContactCard={props.showContactCard} />
    </Card>
  );
};

export default Profile;
