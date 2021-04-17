import React from 'react';
import {Route, Redirect, useRouteMatch} from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    // console.log('true')
    console.log(rest)
    let {url} = useRouteMatch();
    console.log(url)
    return <Route
        {...rest}
        render={props => (
            auth === true
            ? <Component {...props} />
            : <Redirect to='/admin-login' />
            )}
    />
};

export default PrivateRoute;