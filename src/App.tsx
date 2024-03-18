import { useState } from "react";
import bgPhoto from "./assets/Group 10.jpg";
import Input from "./components/_organisms/Input";
import { handleBackSpaceClick, spaceAddFunc } from "./helpers/helpers";
import DoubleInput from "./components/_organisms/DoubleInput";
import CardImages from "./components/_molecules/cardImages";
import Button from "./components/_molecules/Button";

export function App() {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [nameErr, setNameErr] = useState<boolean>(true);
  const [numberErr, setNumberErr] = useState<boolean>(true);
  const [dateErr, setDateErr] = useState<boolean>(true);
  const [cvcErr, setCvcErr] = useState<boolean>(true);

  const handleBackSpace = (event: React.KeyboardEvent<HTMLInputElement>) => {
    handleBackSpaceClick(event, setNumber);
  };

  return (
    <div className="relative flex justify-between">
      <img src={bgPhoto} alt="#" className="h-[100vh] absolute z-[0]" />
      <CardImages number={number} name={name} cvc={cvc} />
      <div className="relative right-[600px] top-[250px] ">
        <Input
          headline={"CARDHOLDER NAME"}
          example={"e.g. Jane Appleseed"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          err={nameErr}
          errMessage={"Enter valid Name"}
          onkeydown={handleBackSpace}
          type={"text"}
          width={381}
          margin={35}
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
          type={"text"}
          width={381}
          margin={35}
        />
        <div className="flex">
          <DoubleInput
            headline={"Exp. Date (MM/YY)"}
            example_1={"MM"}
            example_2={"YY"}
            value_1={month}
            value_2={year}
            err={dateErr}
            errMessage={"Can’t be blank"}
            onChange_1={(e) => {
              if (e.target.value.length <= 2) {
                setMonth(e.target.value);
              }
            }}
            onChange_2={(e) => {
              if (e.target.value.length <= 2) {
                setYear(e.target.value);
              }
            }}
          />
          <Input
            type={"number"}
            width={191}
            headline={"CVC"}
            example={"e.g. 123"}
            value={cvc}
            err={cvcErr}
            errMessage={"Can’t be blank"}
            onChange={(e) => {
              if (e.target.value.length <= 3) {
                setCvc(e.target.value);
              }
            }}
          />
        </div>
        <Button
          onClick={() => {
            console.log("hello");
          }}
        >
          confirm
        </Button>
      </div>
    </div>
  );
}

export default App;
