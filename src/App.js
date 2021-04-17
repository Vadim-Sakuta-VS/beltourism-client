import React, {useState, useEffect} from "react";
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Home} from "./components/pages/Home/Home";
import {Popup} from "./components/Popup/Popup";
import {Services} from "./components/pages/Services/Services";
import {Page404} from "./components/pages/Page404/Page404";
import {useSelector} from "react-redux";
import {ServicesManipulation} from "./components/pages/admin/ServicesManipulation/ServicesManipulation";
import {Alert} from "./components/Alert/Alert";
import AdminLogin from './components/pages/admin/AdminLogin/AdminLogin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserPageWrapper from './components/pages/UserPageWrapper';
import AdminPageWrapper from './components/pages/AdminPageWrapper';
import ServiceDetails from './components/pages/ServiceDetails/ServiceDetails';

export const AuthContext = React.createContext(null);

function App() {
    let [popupInfo, setPopupInfo] = useState({activeForm: '', fromFormClosed: ''});
    const isShowingPageLoader = useSelector(state => state.app.isShowingPageLoader);
    const [isAdminAuth, setIsAdminAuth] = useState(false);
    const [isUserAuth, setIsUserAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('admin-token')) {
            setIsAdminAuth(true);
        }
        if (localStorage.getItem('user-token')) {
            setIsUserAuth(true);
        }
    }, []);

    return (
        <Router>
            <AuthContext.Provider value={{
                isAdminAuth, setIsAdminAuth, isUserAuth, setIsUserAuth
            }}>
                <div className="app">
                    <Alert/>
                    <Popup popupInfo={popupInfo} setPopupInfo={setPopupInfo}/>
                    <Switch>
                        <Route exact path="/"
                               render={
                                   (props) => <UserPageWrapper
                                       {...props}
                                       isShowingPageLoader={isShowingPageLoader}
                                       setPopupInfo={setPopupInfo}
                                   >
                                       <Home isShowingPageLoader={isShowingPageLoader}
                                             setPopupInfo={setPopupInfo}/>
                                   </UserPageWrapper>
                               }
                        />
                        <Route exact path="/home"
                               render={
                                   (props) => <UserPageWrapper
                                       {...props}
                                       isShowingPageLoader={isShowingPageLoader}
                                       setPopupInfo={setPopupInfo}
                                   >
                                       <Home isShowingPageLoader={isShowingPageLoader}
                                             setPopupInfo={setPopupInfo}/>
                                   </UserPageWrapper>
                               }
                        />
                        <Route exact path="/services"
                               render={
                                   (props) => <UserPageWrapper
                                       {...props}
                                       isShowingPageLoader={isShowingPageLoader}
                                       setPopupInfo={setPopupInfo}
                                   >
                                       <Services isShowingPageLoader={isShowingPageLoader}
                                             setPopupInfo={setPopupInfo}/>
                                   </UserPageWrapper>
                               }
                        />
                        <Route path="/services/:type/:id"
                               render={
                                   (props) => <UserPageWrapper
                                       {...props}
                                       isShowingPageLoader={isShowingPageLoader}
                                       setPopupInfo={setPopupInfo}
                                   >
                                       <ServiceDetails isShowingPageLoader={isShowingPageLoader}
                                                 setPopupInfo={setPopupInfo}/>
                                   </UserPageWrapper>
                               }
                        />
                        <Route path="/admin-login"
                               render={
                                   (props) => <AdminPageWrapper
                                       {...props}
                                   >
                                       <AdminLogin/>
                                   </AdminPageWrapper>
                               }
                        />
                        <PrivateRoute auth={isAdminAuth}
                                      path="/admin/services-manipulation"
                                      component={ ()=>(
                                          <AdminPageWrapper>
                                              <ServicesManipulation/>
                                          </AdminPageWrapper>)
                                      } />
                        <Route path="/page404" render={(props) => <Page404 {...props}/>}/>
                        <Redirect to="/page404"/>
                    </Switch>
                </div>
            </AuthContext.Provider>
        </Router>
    );
}

export default App;
