import styled from "@emotion/styled";

const StyledImageButton = styled.button`
  width: 50px;
  padding-right: 12px;

  &:hover {
    svg {
      path {
        fill: ${({ theme: {colors} }) => colors.mint};
      }
    }
  }
`;

export default StyledImageButton;
