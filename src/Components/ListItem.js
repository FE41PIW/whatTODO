import React from "react";
import List from "./List";
import {
  MdRemoveCircleOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";

function ListItem({ todo }) {
  const { text, checked } = todo;
  return (
    <div className="ListContainer">
      <li className="SmallList">
        <div>
          {text}
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="forRemove">
            <MdRemoveCircleOutline />
          </div>
        </div>
      </li>
    </div>
  );
}

export default ListItem;
