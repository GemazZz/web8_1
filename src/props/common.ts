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

export interface DoubleInputProps {
  headline: string;
  example_1: string;
  example_2: string;
  value_1: number;
  value_2: number;
  err: boolean;
  errMessage: string;
  onChange_1: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange_2: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
