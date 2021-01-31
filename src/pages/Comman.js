import React from 'react';
import { Link} from "react-router-dom";

const Comman = (props) => {
    return(
         <React.Fragment>
         <section id="header" className="d-flex align-items-center">
         <div className="container-fluid">
         <div className="row">
         <div className="col-10 mx-auto">
           
           <div className="row">
           <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1 className="head-title">
               {props.name}<strong className="brand-name"> NewTechnologyServices</strong>
              </h1>
              <h2 className="my-3"> 
                We are the team of the talented developer making websites.
              </h2>
              <div className="mt-3">
                <Link to={props.visitLink} className="btn-get-started">{props.btnName}</Link>
              </div>
            
           </div>
           <div className="col-md-6  col-lg-6 pt-5 pt-lg-0 order-1 order-lg-2 header-image">
                 <img src={props.imgSrc}  className="img-fluid" alt="image head"/>
           </div>
            </div>
             
           
         </div>
           
      </div>
      </div>
      </section>
         </React.Fragment>
    )
}

export default Comman;