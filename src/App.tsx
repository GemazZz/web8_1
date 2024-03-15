import { useState } from "react";
import bgPhoto from "./assets/Group 10.jpg";
import cardUp from "./assets/Oval Copy 2.png";
import whiteDots from "./assets/Group 8.svg";
import cardDown from "./assets/Group 13.png";
import greyLine from "./assets/Group 12.svg";
import lines from "./assets/Group 15.svg";
import Input from "./components/_organisms/Input";
import { handleBackSpaceClick, spaceAddFunc } from "./helpers/helpers";
import DoubleInput from "./components/_organisms/DoubleInput";

export function App() {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [nameErr, setNameErr] = useState<boolean>(true);
  const [numberErr, setNumberErr] = useState<boolean>(true);

  const handleBackSpace = (event: React.KeyboardEvent<HTMLInputElement>) => {
    handleBackSpaceClick(event, setNumber);
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
          onkeydown={handleBackSpace}
        />
        <Input
          onkeydown={handleBackSpace}
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
        <DoubleInput
          headline={"Exp. Date (MM/YY)"}
          example_1={"MM"}
          example_2={"YY"}
          value_1={month}
          value_2={year}
          err={false}
          errMessage={"Can’t be blank"}
          onChange_1={(e) => {
            setMonth(parseInt(e.target.value));
          }}
          onChange_2={(e) => {
            setYear(parseInt(e.target.value));
          }}
        />
      </div>
    </div>
  );
}

export default App;
