import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.less";
import CardShare from "./pages/liveShare/CardShare";
import GuessPrize from "./pages/liveShare/GuessPrize";
import MyLevel from "./pages/liveShare/MyLevel";
import MyNoble from "./pages/liveShare/MyNoble";
import * as util from './common/util'
import TestBridge from "./pages/TestBridge";

util.remSet()
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/test" component={TestBridge} />

        <Route path="/live-share/card-share" component={CardShare} />
        <Route path="/live-share/guess-price" component={GuessPrize} />
        <Route path="/live-share/my-level" component={MyLevel} />
        <Route path="/live-share/my-noble" component={MyNoble} />
      </BrowserRouter>
    </div>
  );
}

export default App;
