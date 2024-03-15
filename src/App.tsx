import { KeyboardEvent, useState } from "react";
import bgPhoto from "./assets/Group 10.jpg";
import cardUp from "./assets/Oval Copy 2.png";
import whiteDots from "./assets/Group 8.svg";
import cardDown from "./assets/Group 13.png";
import greyLine from "./assets/Group 12.svg";
import lines from "./assets/Group 15.svg";
import Input from "./components/_molecules/input";

function App() {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [nameErr, setNameErr] = useState<boolean>(true);
  const [numberErr, setNumberErr] = useState<boolean>(true);

  const spaceAddFunc = (string: string) => {
    if (string.length < 6 && string.length != 0 && string.length % 4 === 0) {
      string = string + " ";
    }
    if (string.length < 19 && string.length > 6 && (string.length + 1) % 5 === 0) {
      string = string + " ";
    }
    return string;
  };

  const handleBackSpaceClick = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 8) {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.value.length === 5) {
        const newNum = inputElement.value.slice(0, 4);
        setNumber(newNum);
      }
      if (inputElement.value.length === 10) {
        const newNum = inputElement.value.slice(0, 9);
        setNumber(newNum);
      }
      if (inputElement.value.length === 15) {
        const newNum = inputElement.value.slice(0, 14);
        setNumber(newNum);
      }
    }
  };

  return (
    <div className="relative flex justify-between">
      <img src={bgPhoto} alt="#" className="h-[100vh] absolute z-[0]" />
      <div>
        <div>
          <img src={cardUp} alt="#" className="z-[1] relative top-[160px] left-[160px]"></img>
          <h1 className="z-[4] absolute text-white left-[195px] top-[300px] text-[30px] tracking-widest">
            {number ? number : "0000 0000 0000 0000"}
          </h1>
          <h1 className="z-[4] absolute text-white left-[195px] top-[355px] text-[16px]">{name ? name : "JANE APPLESEED"}</h1>
          <img src={whiteDots} alt="#" className="relative z-[2] left-[190px] bottom-[50px]" />
        </div>
        <img src={cardDown} alt="#" className="relative z-[1] left-[300px] top-[160px]" />
        <img src={greyLine} alt="#" className="relative z-[2] left-[345px] top-[16px]" />
        <img src={lines} alt="#" className="relative z-[2] left-[430px] top-[56px]" />
      </div>
      <div className="w-[381px] h-[352px] relative right-[600px] top-[250px] ">
        <Input
          headline={"CARDHOLDER NAME"}
          example={"e.g. Jane Appleseed"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          err={nameErr}
          errMessage={"Enter valid Name"}
          onkeydown={handleBackSpaceClick}
        />
        <Input
          onkeydown={handleBackSpaceClick}
          headline={"CARD NAME"}
          example={"e.g. 1234 5678 9123 0000"}
          value={number}
          onChange={(e) => {
            if (e.target.value.length <= 19) {
              setNumber(spaceAddFunc(e.target.value));
            }
          }}
          err={numberErr}
          errMessage={"Wrong format, numbers only"}
        />
      </div>
    </div>
  );
}

export default App;
