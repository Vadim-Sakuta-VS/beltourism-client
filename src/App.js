import React, {useState} from "react";
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Home} from "./components/pages/Home/Home";
import {Footer} from "./components/Footer/Footer";
import {Popup} from "./components/Popup/Popup";

function App() {
  let [popupInfo, setPopupInfo] = useState({activeForm: "", fromFormClosed: ""});

  return (
      <Router>
        <div className="app">
          <Popup popupInfo={popupInfo} setPopupInfo={setPopupInfo}/>
          <Header setPopupInfo={setPopupInfo}/>
          <div className="pages">
            <Switch>
              <Route path="/" render={(props) => <Home {...props} setPopupInfo={setPopupInfo} />}/>
              <Route path="/home" render={(props) => <Home {...props} />}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
