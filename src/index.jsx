import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import { Provider } from "react-redux";

import App from "@/App";

import configureStore from "@/redux/index";
import UrlSelector from "@/components/common/url-selector/UrlSelector";
import { URL } from "@/constants";

const { store } = configureStore();

axios.defaults.baseURL = localStorage.getItem("url") || URL.베루스;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <UrlSelector />
      <App />
    </BrowserRouter>
  </Provider>
);
