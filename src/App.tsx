import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.less";
import CardShare from "./pages/liveShare/CardShare";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/live-share/card-share" component={CardShare} />
      </BrowserRouter>
    </div>
  );
}

export default App;
