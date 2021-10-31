import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <img className="mx-auto w-24 h-24" src="https://i.ibb.co/rxHTDRt/preloader.gif" alt="" />
    }
    return (
        <Route 
            {...rest}
            render={({ location }) =>
        user.email || user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
        >

        </Route>
    );
};

export default PrivateRoute;


    // const {user, isLoading} = useAuth();
    // if(isLoading){
    //     return <img src={preloader} alt="" />
    // }