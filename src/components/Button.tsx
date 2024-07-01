import React from "react";
import { StyledButton } from "../styles/StyledButton";
import { ButtonProps } from "../types";

export const Button: React.FC<ButtonProps> = React.memo(
  ({ title, onClick, children }) => (
    <StyledButton title={title} onClick={onClick}>
      {children}
    </StyledButton>
  )
);
