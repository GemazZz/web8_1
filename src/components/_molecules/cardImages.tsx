import cardUp from "../../assets/Oval Copy 2.png";
import whiteDots from "../../assets/Group 8.svg";
import cardDown from "../../assets/Group 13.png";
import greyLine from "../../assets/Group 12.svg";
import lines from "../../assets/Group 15.svg";
import { CardProps } from "../../props/common";

function CardImages({ number, name, cvc }: CardProps) {
  return (
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
      <p className="z-[4] absolute text-white left-[650px] top-[560px] text-[17px]">{cvc ? cvc : "000"}</p>
      <img src={greyLine} alt="#" className="relative z-[2] left-[345px] top-[16px]" />
      <img src={lines} alt="#" className="relative z-[2] left-[430px] top-[56px]" />
    </div>
  );
}

export default CardImages;
