import React, {Component} from 'react';
import Header  from './Header';
import Footer from './Footer'

const PublicLayout = (props) => {
    const {children} = props; 
    return (
         <React.Fragment>
          <Header />
                 { children }
                 <Footer />
         </React.Fragment>
    )

}
     


export default PublicLayout; 