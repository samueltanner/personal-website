const ProfileImage = (props) => {
  return (
    <div className="w-6/12 sm:w-4/12 px-4 mx-auto mb-2 md:w-2/5 lg:w-1/3">
      <img
        className="rounded-full max-w-full h-auto drop-shadow-sm border-8 border-slate-100 "
        src="https://media-exp1.licdn.com/dms/image/C5603AQEnV25eNO-Ykw/profile-displayphoto-shrink_400_400/0/1603868910357?e=1645660800&v=beta&t=jjBlFE1b4ETm5QqYakkyJuHn_-BnQlAc311Ve_1Qbx8"
        alt="sam profile"
        width="512"
        height="512"
      ></img>
    </div>
  );
};

export default ProfileImage;
