import React from "react";
import "./Config/Reactotron";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Provider } from "react-redux";
import store from "./Store";

import GlobalStyled from "./Styles";
import Principal from "./Pages/Principal";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Principal descricao="Adicionar" />
    </Provider>
  );
}

export default App;
