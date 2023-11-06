import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home";
import Study from "../Study";
import View from "../View";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function Layout() {
  return (
    <React.Fragment>
      <Header />

      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Router>
          <Switch>
            <Route>
              <Home exact path="/" />
            </Route>
            <Route>
              <Study path="/decks/:deckId/study" />
            </Route>
            <Route>
              <View path="/decks/:deckId"></View>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default Layout;
