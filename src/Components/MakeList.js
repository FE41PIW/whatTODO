import React, { useCallback } from "react";
import { useState } from "react";

function MakeList({ onInsert }) {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} placeholder="Write what to do" />
      <button type="submit">+</button>
    </form>
  );
}

export default MakeList;
