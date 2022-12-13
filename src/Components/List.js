import React from "react";
import ListItem from "./ListItem";

function List({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default List;
