import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home";
import Study from "../Study";
import View from "../View";
import AddCard from "../Add";
import DeckEdit from "../Edit/DeckEdit";
import CardEdit from "../Edit/CardEdit";
import NewDeck from "../NewDeck";

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
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/decks/:deckId/cards/:cardId/new">
              <CardEdit />
            </Route>
            <Route path="/decks/:deckId/cards/new">
              <AddCard />
            </Route>
            <Route path="/decks/:deckId/study">
              <Study />
            </Route>
            <Route path="/decks/:deckId/edit">
              <DeckEdit />
            </Route>
            <Route path="/decks/:deckId">
              <View />
            </Route>
            <Route path="/decks/new">
              <NewDeck />
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
