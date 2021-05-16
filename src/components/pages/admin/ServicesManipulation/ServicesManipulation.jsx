import React from 'react';
import "./ServicesManipulation.scss";
import {NavLink, Switch, Route, useRouteMatch, Redirect} from "react-router-dom";
import {Page404} from "../../Page404/Page404";
import {ServiceAdding} from "../ServiceAdding/ServiceAdding";
import ServiceDeleting from '../ServiceDeleting/ServiceDeleting';
import Booking from '../Booking/Booking';
import Comments from '../Comments/Comments';

export const ServicesManipulation = () => {
    let {url} = useRouteMatch();

    return (
        <section className="services-manipulation">
            <div className="container" style={{display: "flex"}}>
                <div className="services-manipulation__col-1">
                    <nav className="services-manipulation__menu">
                        <div className="menu-link__wrap">
                            <NavLink className="menu-link" to={`${url}/service-adding`}>
                                Добавление услуги
                            </NavLink>
                        </div>
                        {/*<div className="menu-link__wrap">*/}
                        {/*    <NavLink className="menu-link" to={`${url}/service-editing`}>*/}
                        {/*        Редактирование услуги*/}
                        {/*    </NavLink>*/}
                        {/*</div>*/}
                        <div className="menu-link__wrap">
                            <NavLink className="menu-link" to={`${url}/service-deleting`}>
                                Удаление услуги
                            </NavLink>
                        </div>
                        <div className="menu-link__wrap">
                            <NavLink className="menu-link" to={`${url}/booking`}>
                                Бронирование
                            </NavLink>
                        </div>
                        <div className="menu-link__wrap">
                            <NavLink className="menu-link" to={`${url}/comments`}>
                                Комментарии
                            </NavLink>
                        </div>
                    </nav>
                </div>
                <div className="services-manipulation__col-2">
                    <Switch>
                        <Route exact path={`/admin/services-manipulation`}>
                            <h2 className="services-manipulation__action-title">Выберите действие</h2>
                        </Route>
                        <Route
                            path={`/admin/services-manipulation/service-adding`}
                            render={(props) => <ServiceAdding {...props}/>}
                        />
                        <Route
                            path={`/admin/services-manipulation/service-deleting`}
                            render={(props) => <ServiceDeleting {...props}/>}
                        />
                        <Route
                            path={`/admin/services-manipulation/booking`}
                            render={(props) => <Booking {...props}/>}
                        />
                        <Route
                            path={`/admin/services-manipulation/comments`}
                            render={(props) => <Comments {...props}/>}
                        />
                        <Route path="/page404" render={(props) => <Page404 {...props}/>}/>
                        <Redirect to="/page404"/>
                    </Switch>
                </div>
            </div>
        </section>
    );
};
