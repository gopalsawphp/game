import React from "react"; 
import { Route } from "react-router-dom";
import ProtectedLayout from './_layout/admin/ProtectedLayout';
import PublicLayout from './_layout/web/PublicLayout';

 
  const  RouterWrapper = ({ component: Component, isProtectedRoute, ...rest}) =>
{
     const Layout = (isProtectedRoute) ? ProtectedLayout  : PublicLayout ;
    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      /> 
    )

}
 

export default RouterWrapper; 