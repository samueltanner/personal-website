const FooterMenuCard = (props) => {
  const handleMenuSelection = (event) => {
    props.setWindow(event.target.value);
  };

  return (
    <div
      className={`bg-slate-200 rounded-xl drop-shadow-lg z-20 left-2 right-2 mx-3 md:left-1/2 md:right-3 md:fixed md:bottom-3 ${props.className}`}
    >
      {/* <div className="fixed bottom-3 bg-slate-800 w-1/3 flex flex-wrap inset-x-0 mx-auto rounded-md drop-shadow-lg "> */}
      <div className="flex flex-row gap-6 justify-around p-3">
        <button value="timeline" onClick={handleMenuSelection}>
          Work History
        </button>
        <button value="skills" onClick={handleMenuSelection}>
          Skills
        </button>
        {/* <button value="portfolio" onClick={handleMenuSelection}>
          Portfolio
        </button> */}
      </div>
    </div>
  );
};

export default FooterMenuCard;
