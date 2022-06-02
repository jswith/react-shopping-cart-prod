import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.fontSize};
  color: white;
  border: none;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray3};
    cursor: initial;
  }
`;

export default StyledButton;
