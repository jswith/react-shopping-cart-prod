import React from "react";
import { useDispatch } from "react-redux";

import { css } from "@emotion/react";

import {
  toggleCartItemCheckButton,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  removeRowCartItem,
} from "@/redux/modules/cartList";

import TrashIcon from "@/assets/images/trash.svg";

import Checkbox from "@/components/common/checkbox/Checkbox";

import StyledCartContainer from "@/components/pages/cart/product-item/ProductItem.styled";
import StyledHr from "@/components/pages/cart/product-item/hr.styled";

function ProductItem({ item }) {
  const { id, name, price, imageUrl, quantity, checked } = item;
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleCartItemCheckButton(id));
  };

  const handleIncrementClick = () => {
    dispatch(incrementCartItemQuantity(id, quantity + 1));
  };

  const handleDecrementClick = () => {
    dispatch(decrementCartItemQuantity(id, quantity - 1));
  };

  const handleRemoveIconClick = () => {
    dispatch(removeRowCartItem(id));
  };

  return (
    <>
      <StyledCartContainer>
        <div className="product-item__left">
          <Checkbox onChange={handleChange} checked={checked} />
          <img src={imageUrl} alt={name} />
          <span className="cart-name">{name}</span>
        </div>
        <div className="product-item__right">
          <TrashIcon
            onClick={handleRemoveIconClick}
            css={css`
              cursor: pointer;
            `}
          />
          <div className="number-input-container">
            <input
              type="number"
              className="number-input"
              value={quantity}
              onChange={(e) => e}
            />
            <div>
              <button
                onClick={handleIncrementClick}
                type="button"
                className="number-input-button"
              >
                ▲
              </button>
              <button
                onClick={handleDecrementClick}
                type="button"
                className="number-input-button"
              >
                ▼
              </button>
            </div>
          </div>
          <span className="cart-price">
            {(price * quantity).toLocaleString("ko-KR")}원
          </span>
        </div>
      </StyledCartContainer>
      <StyledHr />
    </>
  );
}

export default ProductItem;
