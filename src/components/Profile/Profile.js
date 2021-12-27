import Card from "../UI/Card";
import ProfileImage from "./ProfileImage";

import { profile } from "../../utils/constants";
import ContactContainer from "../../ConactBar/ContactContainer";

const Profile = (props) => {
  return (
    <Card className="relative bg-slate-200 drop-shadow-lg sm:h-1/2 ">
      <ProfileImage />
      <div className="flex flex-wrap">
        <p className="font-bold ml-2">{profile.name}</p>
        <p className="italic ml-2"> | {profile.title}</p>
      </div>
      <p className=" ml-2 mb-12">"{profile.blurb}"</p>
      <ContactContainer className="" />
    </Card>
  );
};

export default Profile;
