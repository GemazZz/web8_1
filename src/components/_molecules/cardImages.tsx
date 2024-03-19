import cardUp from "../../assets/Oval Copy 2.png";
import whiteDots from "../../assets/Group 8.svg";
import cardDown from "../../assets/Group 13.png";
import greyLine from "../../assets/Group 12.svg";
import lines from "../../assets/Group 15.svg";
import { CardProps } from "../../props/common";

function CardImages({ number, name, cvc }: CardProps) {
  return (
    <div className="relative right-[120px]">
      <img src={cardUp} alt="#" className="z-[1] relative"></img>
      <img src={whiteDots} alt="#" className="relative z-[2] left-[30px] bottom-[210px]" />
      <h1 className="z-[4] absolute text-white left-[25px] top-[140px] text-[30px] tracking-widest">
        {number ? number : "0000 0000 0000 0000"}
      </h1>
      <h1 className="z-[4] absolute text-white left-[25px] top-[195px] text-[16px]">{name ? name : "JANE APPLESEED"}</h1>
      <img src={cardDown} alt="#" className="relative z-[1] left-[140px] " />
      <p className="z-[4] absolute text-white left-[500px] top-[400px] text-[17px]">{cvc ? cvc : "000"}</p>
      <img src={greyLine} alt="#" className="absolute z-[2] left-[185px] top-[393px] " />
      <img src={lines} alt="#" className="absolute z-[2] left-[280px] top-[456px]" />
    </div>
  );
}

export default CardImages;
