import { ButtonProps } from "../../props/common";

function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <button
        className="relative w-[381px] h-[53px] my-[40px] bg-[#21092F] border-solid border-[1px] text-[#FFFFFF] rounded-lg hover:scale-105 transition-all active:scale-95"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
