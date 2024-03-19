import { useState } from "react";
import bgPhoto from "./assets/Group 10.jpg";
import Input from "./components/_organisms/Input";
import { handleBackSpaceClick, spaceAddFunc } from "./helpers/helpers";
import DoubleInput from "./components/_organisms/DoubleInput";
import CardImages from "./components/_molecules/cardImages";
import Button from "./components/_molecules/Button";
import check from "./assets/Group 9.svg";

export function App() {
  const [input, setInput] = useState<boolean>(true);
  const [finish, setFinish] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [nameErr, setNameErr] = useState<boolean>(false);
  const [numberErr, setNumberErr] = useState<boolean>(false);
  const [dateErr, setDateErr] = useState<boolean>(false);
  const [cvcErr, setCvcErr] = useState<boolean>(false);

  const handleBackSpace = (event: React.KeyboardEvent<HTMLInputElement>) => {
    handleBackSpaceClick(event, setNumber);
  };

  return (
    <>
      <img src={bgPhoto} alt="#" className="h-[100vh] absolute z-[0]" />
      <div className="relative h-[100vh] flex justify-around items-center">
        <CardImages number={number} name={name} cvc={cvc} />
        {input && (
          <div className="relative right-[230px]">
            <Input
              headline={"CARDHOLDER NAME"}
              example={"e.g. Jane Appleseed"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameErr(false);
              }}
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
                  setNumberErr(false);
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
                    setDateErr(false);
                    setMonth(e.target.value);
                  }
                }}
                onChange_2={(e) => {
                  if (e.target.value.length <= 2) {
                    setDateErr(false);
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
                    setCvcErr(false);
                    setCvc(e.target.value);
                  }
                }}
              />
            </div>
            <Button
              onClick={() => {
                const containsLetter: boolean = /[a-zA-Z]/.test(number);
                if (name !== "" && (number.length === 19 || !containsLetter) && (month.length === 2 || year.length === 2) && cvc.length !== 2) {
                  setInput(false);
                  setFinish(true);
                } else if (name === "") {
                  setNameErr(true);
                } else if (number.length !== 19 || containsLetter) {
                  setNumberErr(true);
                } else if (month.length !== 2 || year.length !== 2) {
                  setDateErr(true);
                } else if (cvc.length !== 2) {
                  setCvcErr(true);
                }
              }}
            >
              confirm
            </Button>
          </div>
        )}
        {finish && (
          <div className="relative right-[230px] flex flex-col justify-center items-center">
            <img src={check} width={80} alt="#" />
            <h1 className="m-[10px]">THANK YOU!</h1>
            <p className="text-[#8F8694]">We’ve added your card details</p>
            <Button
              onClick={() => {
                setInput(true);
                setFinish(false);
                setName("");
                setNumber("");
                setMonth("");
                setYear("");
                setCvc("");
              }}
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
