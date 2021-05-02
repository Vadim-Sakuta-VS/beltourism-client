import React from 'react';
import {Route, Redirect, useRouteMatch} from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, pathToRedirect, ...rest }) => {
    // console.log('true')
    console.log(rest)
    let {url} = useRouteMatch();
    console.log(url)
    console.log(auth)
    return <Route
        {...rest}
        render={props => (
            auth
            ? <Component {...props} />
            : <Redirect to={pathToRedirect} />
            )}
    />
};

export default PrivateRoute;