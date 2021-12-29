import { useEffect } from "react";

const EmailResponseMessage = (props) => {
  useEffect(() => {
    let toastCountdown = setTimeout(() => props.handleShowToast(), 5000);
    return () => {
      clearTimeout(toastCountdown);
    };
  });

  return (
    <div className="bg-slate-400 drop-shadow-lg p-4 rounded-lg text-white font-semibold animate-fade-in-out-static">
      {props.text}
    </div>
  );
};

export default EmailResponseMessage;
