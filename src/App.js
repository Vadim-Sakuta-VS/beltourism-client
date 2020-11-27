import React, {useState} from "react";
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Home} from "./components/pages/Home/Home";
import {Footer} from "./components/Footer/Footer";
import {Popup} from "./components/Popup/Popup";
import Services from "./components/pages/Services/Services";
import {Page404} from "./components/pages/Page404/Page404";

function App() {
  let [popupInfo, setPopupInfo] = useState({activeForm: "", fromFormClosed: ""});

  return (
      <Router>
        <div className="app">
          <Popup popupInfo={popupInfo} setPopupInfo={setPopupInfo}/>
          <Header setPopupInfo={setPopupInfo}/>
          <div className="pages">
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} setPopupInfo={setPopupInfo} />}/>
              <Route exact path="/home" render={(props) => <Home {...props} setPopupInfo={setPopupInfo} />}/>
              <Route exact path="/services" render={(props) => <Services {...props} setPopupInfo={setPopupInfo}/>}/>
              <Route path="/page404" render={(props) => <Page404 {...props}/>}/>
              <Redirect to="/page404"/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
