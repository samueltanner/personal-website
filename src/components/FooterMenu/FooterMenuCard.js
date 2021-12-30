const FooterMenuCard = (props) => {
  return (
    <div
      className={`md:fixed md:bottom-3 bg-slate-200 rounded-xl drop-shadow-lg z-20 left-2 right-2 md:left-1/2 md:right-3 ${props.className}`}
    >
      {/* <div className="fixed bottom-3 bg-slate-800 w-1/3 flex flex-wrap inset-x-0 mx-auto rounded-md drop-shadow-lg "> */}
      <div className="flex flex-row gap-6 justify-center p-3 ">
        <button>Work History</button>
        <button>Skills</button>
        <button>Portfolio</button>
      </div>
    </div>
  );
};

export default FooterMenuCard;
