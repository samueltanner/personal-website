import Card from "../UI/Card";
import ProfileImage from "./ProfileImage";

import { profile } from "../../utils/constants";
import ContactContainer from "../../ConactBar/ContactContainer";

const Profile = (props) => {
  return (
    <Card className="bg-slate-200 drop-shadow-lg h-2/5 relative">
      <ProfileImage className="" />
      <div className="flex flex-wrap">
        <p className="font-bold ml-2">{profile.name}</p>
        <p className="italic ml-2"> | {profile.title}</p>
      </div>
      {/* <p className=" ml-2">"{profile.blurb}"</p> */}
      <ContactContainer className="bottom" />
    </Card>
  );
};

export default Profile;
