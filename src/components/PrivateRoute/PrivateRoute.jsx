import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, pathToRedirect, ...rest }) => {
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