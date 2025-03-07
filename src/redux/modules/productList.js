import axios from "axios";
import createAction from "@/redux/createAction";

export const ACTION_TYPES = {
  GET_PRODUCT_LIST_START: "GET_PRODUCT_LIST_START",
  GET_PRODUCT_LIST_SUCCESS: "GET_PRODUCT_LIST_SUCCESS",
  GET_PRODUCT_LIST_ERROR: "GET_PRODUCT_LIST_ERROR",
};

export const getProductList = () => async (dispatch) => {
  try {
    dispatch(createAction(ACTION_TYPES.GET_PRODUCT_LIST_START));

    const response = await axios.get(`/products`);
    dispatch(
      createAction(
        ACTION_TYPES.GET_PRODUCT_LIST_SUCCESS,
        response.data.productList
      )
    );
  } catch (error) {
    dispatch(createAction(ACTION_TYPES.GET_PRODUCT_LIST_ERROR, error));
  }
};

const productListInitialState = {
  productList: {
    loading: false,
    data: null,
    error: null,
  },
};

export const productListReducer = (state = productListInitialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PRODUCT_LIST_START:
      return {
        ...state,
        productList: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case ACTION_TYPES.GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };

    case ACTION_TYPES.GET_PRODUCT_LIST_ERROR:
      return {
        ...state,
        productList: {
          loading: false,
          data: null,
          error: action.payload.message,
        },
      };

    default: {
      return state;
    }
  }
};
