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
import Breadcrumb from "../Breadcrumb";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

export default function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home Breadcrumb={Breadcrumb} />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard Breadcrumb={Breadcrumb} />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit Breadcrumb={Breadcrumb} />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study Breadcrumb={Breadcrumb} />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit Breadcrumb={Breadcrumb} />
          </Route>
          <Route path="/decks/new">
            <NewDeck Breadcrumb={Breadcrumb} />
          </Route>
          <Route path="/decks/:deckId">
            <View Breadcrumb={Breadcrumb} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}
