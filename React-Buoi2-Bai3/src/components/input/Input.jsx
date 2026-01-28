import { useState } from "react";

export default function Input(props) {
  const [value, setValue] = useState("");

  function handle(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <label htmlFor="">{props.label}: </label>
      <input type="text" onChange={handle} />
      <h3>{value}</h3>
    </>
  );
}
