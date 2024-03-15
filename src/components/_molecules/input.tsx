import { InputProps } from "../../props/common";

function Input({ headline, example, value, err, errMessage, onChange, onkeydown }: InputProps) {
  return (
    <div className="my-[30px]">
      <p className="font-medium text-[15px]">{headline}</p>
      <input
        type="text"
        placeholder={example}
        value={value}
        onChange={onChange}
        onKeyDown={onkeydown}
        className={`w-[381px] h-[45px] border-solid border-[1px] ${err ? "border-[#FF5050]" : ""} rounded-[10px] p-3 my-[5px]`}
      />
      {err && <p className="absolute text-[#FF5050] text-[15px]">{errMessage}</p>}
    </div>
  );
}

export default Input;
