import { DoubleInputProps } from "../../props/common";
import "../../index.css";

function DoubleInput({ headline, example_1, example_2, value_1, value_2, onChange_1, onChange_2, err, errMessage }: DoubleInputProps) {
  return (
    <div>
      <p className="font-medium text-[15px]">{headline}</p>
      <input
        type="number"
        placeholder={example_1}
        value={value_1}
        onChange={onChange_1}
        className={`w-[80px] h-[45px] border-solid border-[1px] ${
          err ? "border-[#FF5050]" : ""
        } rounded-[10px] p-3 my-[5px] custom-number-input mr-[10px]`}
      />
      <input
        type="number"
        placeholder={example_2}
        value={value_2}
        onChange={onChange_2}
        className={`w-[80px] h-[45px] border-solid border-[1px] ${
          err ? "border-[#FF5050]" : ""
        } rounded-[10px] p-3 my-[5px] custom-number-input mr-[20px]`}
      />
      {err && <p className="absolute text-[#FF5050] text-[15px]">{errMessage}</p>}
    </div>
  );
}

export default DoubleInput;
