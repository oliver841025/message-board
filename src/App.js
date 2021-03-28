import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddMessage from "./Components/AddMessage";
import IndMessage from "./Components/IndMessage";
import Message from "./Components/Message";
import { selectMessages } from "./features/messagesSlice";

import "./styles/main.css";

const App = () => {
  const messages = useSelector(selectMessages);

  return (
    <Router>
      <div className="app">
        <div className="header">
          <h1>MoodBoard 🤪</h1>
          <Link to="/addMessage" className="header__button">
            Write Something
          </Link>
        </div>
      </div>

      <Switch>
        <Route path="/" exact>
          <div className="messages">
            {messages &&
              messages.map((message) => (
                <Link to={`/${message.id}`} className="link">
                  <Message data={message} />
                </Link>
              ))}
          </div>
        </Route>

        <Route path="/addMessage">
          <AddMessage />
        </Route>
        <Route path="/:id">
          <IndMessage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
