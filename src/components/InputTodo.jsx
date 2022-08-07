import React from "react";

export const InputTodo = (props) => {
  console.log(props);

  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        value={todoText}
        onChange={onChange}
        type="text"
        placeholder="TODO"
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
