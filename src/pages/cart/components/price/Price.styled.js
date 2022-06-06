import styled from "@emotion/styled";

const StyledPrice = styled.section`
  width: 35%;
  height: 330px;
  margin-left: 5%;
  margin-top: 80px;
  border: 1px solid ${({ theme: {colors} }) => colors.gray4};

  .cart-right-section__top {
    display: flex;
    align-items: center;
    padding: 16px 22px;
    margin: 0 10px;

    h3 {
      display: flex;
      align-items: center;
      font-size: ${({ theme: {fontSize} }) => fontSize.m};
    }
  }

  hr {
    width: 100%;
    border: 1px solid ${({ theme: {colors} }) => colors.gray1};
  }

  .cart-right-section__bottom {
    display: flex;
    flex-direction: column;

    .cart-right-section__bottom__price {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      margin: 20px 10px 0 10px;

      .highlight-text {
        position: relative;
        font-weight: 700;
        display: inline-block;
        text-align: center;
        padding: 0 2px;
        font-size: ${({ theme: {fontSize}}) => fontSize.m};
      }

      .highlight-text::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 8px;
        background-color: ${({ theme: {colors} }) => colors.mint};
        opacity: 0.5;
        z-index: -1;
      }
    }

    .cart-right-section__bottom__button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px 30px 0 30px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({ theme: {colors} }) => colors.mint};
        font-size: ${({ theme: {fontSize}}) => fontSize.l};
        color: ${({ theme: {colors} }) => colors.white};
        width: 100%;
        padding: 20px;
        border: none;
      }
    }
  }
`;

export default StyledPrice;
