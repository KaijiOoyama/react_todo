import React from "react";

export const CompleteTodos = (props) => {
  console.log(props);
  const { completeTodos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したタスク</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
