import { InputProps } from "../../props/common";

function Input({ type, width, margin, headline, example, value, err, errMessage, onChange, onkeydown }: InputProps) {
  return (
    <div style={{ marginBottom: margin }}>
      <p className="font-medium text-[15px]">{headline}</p>
      <input
        type={type}
        style={{ width: width }}
        placeholder={example}
        value={value}
        onChange={onChange}
        onKeyDown={onkeydown}
        className={`h-[45px] border-solid border-[1px] ${err ? "border-[#FF5050]" : ""} rounded-[10px] p-3 my-[5px] custom-number-input`}
      />
      {err && <p className="absolute text-[#FF5050] text-[15px]">{errMessage}</p>}
    </div>
  );
}

export default Input;
