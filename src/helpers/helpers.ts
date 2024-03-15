import { KeyboardEvent } from "react";

export const handleBackSpaceClick = (event: KeyboardEvent<HTMLInputElement>, setNumber: (newValue: string) => void) => {
  if (event.keyCode === 8) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length === 5) {
      const newNum = inputElement.value.slice(0, 4);
      setNumber(newNum);
    }
    if (inputElement.value.length === 10) {
      const newNum = inputElement.value.slice(0, 9);
      setNumber(newNum);
    }
    if (inputElement.value.length === 15) {
      const newNum = inputElement.value.slice(0, 14);
      setNumber(newNum);
    }
  }
};

export const spaceAddFunc = (string: string) => {
  if (string.length < 6 && string.length != 0 && string.length % 4 === 0) {
    string = string + " ";
  }
  if (string.length < 19 && string.length > 6 && (string.length + 1) % 5 === 0) {
    string = string + " ";
  }
  return string;
};
