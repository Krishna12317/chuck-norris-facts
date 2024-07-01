import React from "react";
import { StyledButton } from "../styles/StyledButton";
import { ButtonProps } from "../types";

export const Button: React.FC<ButtonProps> = React.memo(
  ({ title, onClick, children, name }) => (
    <StyledButton title={title} name={name} onClick={onClick}>
      {children}
    </StyledButton>
  )
);
