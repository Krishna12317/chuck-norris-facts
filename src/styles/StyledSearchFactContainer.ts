import styled from 'styled-components';

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchFactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledSearchFactInput = styled.input`
  width: 40%;
  padding: 8px;
  font-size: 16px;
  margin: 5px;
  border-radius: 5px;
  
  &:focus {
    outline: none;
    border-color: #646cff;
  }
`;
