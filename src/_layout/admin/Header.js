
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return(
 
    <React.Fragment>
         <div className="container-fluid nav_bg">
               <div className="row">

                  <div className="col-10 mx-auto">
                   
                      
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">NewTechnologyServices</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
              
                  </div>
                </nav>
                      
                    
                  </div>
                    
               </div>
         </div>
    </React.Fragment>

  
   )
}
export default Header;
