import { useEffect, useState } from "react";
import Header from "../UI/Header";
import BreedCard from "./BreedCard";
import DogImage from "./DogImage";

const DogsPage = (props) => {
  const [breeds, setBreeds] = useState([1, 2, 3, 5]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((results) => results.json())
      .then((data) => {
        setBreeds(Object.keys(data.message).slice(0, 6));
        // console.log(Object.keys(data.message));
      });
  }, []);
  const url = "https://images.dog.ceo/breeds/pyrenees/n02111500_5962.jpg";

  return (
    <>
      <Header />
      <div className="flex gap-5 p-6  bg-[#232323] h-screen justify-evenly">
        <div className="flex flex-col justify-center">
          {breeds.map((breed, index) => (
            <BreedCard name={breed} key={index} />
          ))}
        </div>
        <DogImage url={url} />
      </div>
    </>
  );
};

export default DogsPage;
