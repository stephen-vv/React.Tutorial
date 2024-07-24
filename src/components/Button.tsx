import React, { useState } from "react";
import Alert from "./Alert";

interface Props {
  name: string;
  color?: string;
  onClick: () => void;
}

export default function Button({ name, color = "primary", onClick }: Props) {
  let [counter, setCounter] = useState(0);

  // Define the function inside the component
  function displayAlert() {
    setCounter(counter + 1);
  }

  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {name} {counter}
    </button>
  );
}
