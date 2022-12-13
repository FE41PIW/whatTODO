import React from "react";
import styled from "styled-components";

function Todo({ children }) {
  return (
    <Wrapper>
      <div>TODO리스트</div>

      <div className="content">{children}</div>
    </Wrapper>
  );
}

export default Todo;

const Wrapper = styled.div`
  font-size: 1.5em;
  width: 500px;
  height: 700px;
  margin: 6rem auto 0 auto;
  border: 1px solid black;
  div {
    margin: 20px;
  }
`;
