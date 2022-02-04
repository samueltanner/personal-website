import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Button from "../UI/RectangleButton";

const DogImage = ({ url }) => {
  const [image, setImage] = useState("");
  const click = () => {
    return;
  };
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((results) => results.json())
      .then((data) => {
        setImage(data.message);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <img src={image} alt="Dog" className="w-100"></img>
      <Button buttonType="bg-[#95A3B8] w-40" text="Woof!" className="max-w-100" />
    </div>
  );
};

export default DogImage;
