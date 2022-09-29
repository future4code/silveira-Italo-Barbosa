import React from "react";
import GlobalState from './Global/GlobalState'
import HomePage from "./Pages/Home";
import Router from './Routes/Router'
import { GlobalStyle } from "./Styles/HomeStyle";

function App() {
  return (
    <div>
      {/* <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState> */}
      <HomePage/>
    </div>
  );
}

export default App;