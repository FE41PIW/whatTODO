import "./App.css";
import React, { useRef, useCallback, useState } from "react";

import Todo from "./Components/Todo";

import List from "./Components/List";
import MakeList from "./Components/MakeList";

function App() {
  //일단 간략 더미 데이터 App 안에 작성
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "TODO앱 만들기",
      checked: true,
    },
    {
      id: 2,
      text: "제출하기",
      checked: false,
    },
  ]);
  // 추가용 함수
  const nextId = useRef(3);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  return (
    <div className="App">
      <Todo>
        <MakeList onInsert={onInsert} />
        <List todos={todos} />
      </Todo>
    </div>
  );
}

export default App;
