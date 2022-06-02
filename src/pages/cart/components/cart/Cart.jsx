import Header from "@/pages/cart/components/header/Header";
import Content from "@/pages/cart/components/content/Content";
import ProductList from "@/pages/cart/components/product-list/ProductList";
import Price from "@/pages/cart/components/price/Price";

import StyledWrapper from "@/components/wrapper/ContentWrapper.styled";

function Cart() {
  return (
    <StyledWrapper>
      <Header />
      <Content>
        <ProductList />
        <Price />
      </Content>
    </StyledWrapper>
  );
}

export default Cart;
