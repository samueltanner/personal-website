import { useEffect, useState } from "react";

const EmailResponseMessage = (props) => {
  console.log("contact");

  useEffect(() => {
    let toastCountdown = setTimeout(() => props.handleShowToast(), 3000);
    return () => {
      clearTimeout(toastCountdown);
    };
  }, []);

  return <div className="bg-slate-400 drop-shadow-lg p-4 rounded-lg text-white font-semibold">{props.text}</div>;
};

export default EmailResponseMessage;
