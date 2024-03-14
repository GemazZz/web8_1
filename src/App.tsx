import { useState } from "react";
import bgPhoto from "./assets/Group 10.jpg";
import cardUp from "./assets/Oval Copy 2.png";
import whiteDots from "./assets/Group 8.svg";
import cardDown from "./assets/Group 13.png";
import greyLine from "./assets/Group 12.svg";
import lines from "./assets/Group 15.svg";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="relative flex justify-between">
      <div>
        <img src={bgPhoto} alt="#" className="h-[100vh] absolute z-[0]" />
        <img src={cardUp} alt="#" className="z-[1] relative top-[160px] left-[160px]" />
        <img src={whiteDots} alt="#" className="relative z-[2] left-[190px] bottom-[50px]" />
        <img src={cardDown} alt="#" className="relative z-[1] left-[300px] top-[160px]" />
        <img src={greyLine} alt="#" className="relative z-[2] left-[345px] top-[16px]" />
        <img src={lines} alt="#" className="relative z-[2] left-[445px] top-[56px]" />
      </div>
      <div className="w-[381px] h-[352px] bg-black relative right-[600px] top-[250px] "> </div>
    </div>
  );
}

export default App;
