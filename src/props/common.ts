import { KeyboardEvent } from "react";

export interface InputProps {
  type: string;
  width: number;
  margin?: number;
  headline: string;
  example: string;
  value: string;
  err: boolean;
  errMessage: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onkeydown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export interface DoubleInputProps {
  headline: string;
  example_1: string;
  example_2: string;
  value_1: string;
  value_2: string;
  err: boolean;
  errMessage: string;
  onChange_1: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange_2: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CardProps {
  number: string;
  name: string;
  cvc: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
