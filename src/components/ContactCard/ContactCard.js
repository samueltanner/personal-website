import { useState, useRef, useEffect } from "react";
import { send } from "emailjs-com";
import Card from "../UI/Card";
import RectangleButton from "../UI/RectangleButton";
import EmailResponseMessage from "./EmailResponseMessage";

const ContactCard = (props) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleChangeName = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleShowToast = () => {
    setShowToast(!showToast);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    let form = {
      from_name: name,
      reply_to: email,
      to_name: "Sam Tanner",
      message: message,
    };

    send(
      process.env.REACT_APP_EMAIL_SERVICE,
      process.env.REACT_APP_EMAIL_TEMPLATE,
      form,
      process.env.REACT_APP_EMAIL_USER_ID
    )
      .then((result) => {
        console.log("success");
        setToastMessage("Successfully sent email");
        setShowToast(!showToast);
      })
      .catch((error) => {
        console.log("error");
        setToastMessage("Error in sending email");
        setShowToast(!showToast);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  const handleCancel = () => {
    props.toggleContact();
  };

  return (
    <Card className="bg-slate-200 drop-shadow-lg h-1/2 relative">
      <form className="flex flex-col" onSubmit={handleSubmitForm} ref={form} id="contact_form">
        <label>Name:</label>
        {process.env.EMAIL_SERVICE}
        <input type="text" onChange={handleChangeName} value={name} className="input-primary" required />

        <label>Email:</label>
        <input type="email" onChange={handleChangeEmail} value={email} className="input-primary" required />

        <label>Message:</label>
        <textarea
          type="text"
          rows="7"
          onChange={handleChangeMessage}
          value={message}
          className="input-primary"
          required
        />
        {/* <div className="fixed bottom-3 inset-x-0 flex flex-wrap justify-center gap-4"> */}
        <div className="flex flex-wrap mt-auto gap-2 mx-auto align-baseline">
          <RectangleButton text="Submit" buttonType={`bg-blue-500  hover:bg-blue-700 drop-shadow-md`} />
          <RectangleButton
            text="Cancel"
            buttonType={`bg-red-400  hover:bg-red-500 drop-shadow-md`}
            type="button"
            onClick={handleCancel}
          />
        </div>
      </form>

      {showToast ? (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <EmailResponseMessage
            text={toastMessage}
            toggleContact={props.toggleContact}
            handleShowToast={handleShowToast}
          />
        </div>
      ) : null}
    </Card>
  );
};

export default ContactCard;
