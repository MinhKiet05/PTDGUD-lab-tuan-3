import { useState } from "react";

function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value.trim() === "") return;
    onAdd(value);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
