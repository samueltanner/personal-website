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
    <Card className="bg-slate-200 drop-shadow-lg ">
      <form className="flex flex-col" onSubmit={handleSubmitForm}>
        <label>Name:</label>
        <input type="text" onChange={handleChangeName} value={name} required />

        <label>Email:</label>
        <input type="email" onChange={handleChangeEmail} value={email} required />

        <label>Message:</label>
        <textarea type="text" rows="6" onChange={handleChangeMessage} value={message} required />
        <div className="flex mx-auto gap-2">
          <RectangleButton text="Submit" buttonType="primary" />
          <RectangleButton text="Cancel" buttonType="warning" type="button" onClick={handleCancel} />
        </div>
      </form>
    </Card>
  );
};

export default ContactCard;
