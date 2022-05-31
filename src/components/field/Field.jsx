import React from "react";
import StyledField from "./Field.styled";

function Field({ labelName, children }) {
  return (
    <StyledField>
      <label>{labelName}</label>
      {children}
    </StyledField>
  );
}

export default Field;
