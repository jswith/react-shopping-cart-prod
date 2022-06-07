import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addProductToCart } from "@/redux/modules/cartList";

import CartIcon from "@/assets/images/cart.svg";

import Thumbnail from "@/components/pages/home/thumbnail/Thumbnail";
import ImageButton from "@/components/pages/home/image-button/ImageButton";

import StyledProductInfo from "@/components/pages/home/product-item/ProductInfo.styled";
import StyledProductItem from "@/components/pages/home/product-item/ProductItem.styled";

import { PATH, MESSAGE } from "@/constants";

function ProductItem({ id, name, price, imageUrl }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartClick = () => {
    dispatch(addProductToCart({ id, name, price, imageUrl }));
  };

  const handleProductDetailClick = () => {
    navigate(`${PATH.DETAIL}/${id}`);
  };

  return (
    <>
      <StyledProductItem>
        <Thumbnail
          src={`${imageUrl}`}
          name={name}
          onClick={handleProductDetailClick}
        />
        <div className="content">
          <StyledProductInfo>
            <div className="l-left">
              <div className="product-title" onClick={handleProductDetailClick}>
                {name}
              </div>
              <div className="product-price">
                {price.toLocaleString("ko-KR")}원
              </div>
            </div>
            <div className="l-right">
              <ImageButton onClick={handleCartClick}>
                <CartIcon />
              </ImageButton>
            </div>
          </StyledProductInfo>
        </div>
      </StyledProductItem>
    </>
  );
}

export default ProductItem;
