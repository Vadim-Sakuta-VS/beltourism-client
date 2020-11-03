import React from "react";
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Home} from "./components/pages/Home/Home";

function App() {
  return (
      <Router>
        <div className="app">
          <Header/>
          <div className="pages">
            <Switch>
              <Route render={(props) => <Home {...props} />}/>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
