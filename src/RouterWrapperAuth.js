import React from "react"; 
import { Route } from "react-router-dom";
import ProtectedLayout from './_layout/admin/ProtectedLayout';
import PublicLayout from './_layout/web/PublicLayout';

 
  const  RouterWrapperAuth = ({ component: Component, isPrivate, ...rest}) =>
{

     const Layout = (isPrivate) ? PublicLayout  : ProtectedLayout ;
 
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
 

export default RouterWrapperAuth; 