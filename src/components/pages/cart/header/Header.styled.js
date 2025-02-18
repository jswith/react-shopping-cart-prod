import styled from "@emotion/styled";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  h2 {
    font-size: ${({ theme: {fontSize} }) => fontSize.xl};
    font-weight: 700;
    margin-bottom: 0px;
  }

  hr {
    width: 100%;
    border: 2px solid ${({ theme: {colors} }) => colors.black2};
    margin-top: 20px;
  }
`;

export default StyledHeader;
