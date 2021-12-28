import { useState } from "react";
import Card from "../components/UI/Card";
import RectangleButton from "../components/UI/RectangleButton";

const ContactCard = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    console.log(name, email, message);
  };

  const handleCancel = () => {
    props.toggleContact();
  };

  return (
    <Card className="bg-slate-200 drop-shadow-lg h-1/2 relative">
      <form className="flex flex-col" onSubmit={handleSubmitForm}>
        <label>Name:</label>
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
    </Card>
  );
};

export default ContactCard;
