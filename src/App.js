import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import "./App.css";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
