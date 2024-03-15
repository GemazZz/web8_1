import { KeyboardEvent } from "react";

export interface InputProps {
  headline: string;
  example: string;
  value: string;
  err: boolean;
  errMessage: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onkeydown: (event: KeyboardEvent<HTMLInputElement>) => void;
}
