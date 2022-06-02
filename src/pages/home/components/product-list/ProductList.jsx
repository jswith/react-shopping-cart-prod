import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductList } from "@/redux/modules/productList";

import Error from "@/pages/error/Error";

import Loading from "@/components/loading/Loading";
import ProductItem from "@/pages/home/components/product-item/ProductItem";

import StyledProductList from "@/pages/home/components/product-list/ProductList.styled";

function ProductList() {
  const { data, loading, error } = useSelector(
    (state) => state.productListState.productList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <StyledProductList>
      {data && data.map((item) => <ProductItem key={item.id} {...item} />)}
    </StyledProductList>
  );
}

export default ProductList;
