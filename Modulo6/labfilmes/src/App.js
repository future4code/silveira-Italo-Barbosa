import React from "react";
import Router from "./routes/router";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
