import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/card.css'

const Card = (props) => {
  const MAX_ITEMS = 100;
  const getRenderedItems = (descp) => {
    return descp.slice(0, MAX_ITEMS) + '...';
  }

    return(
         <React.Fragment>
      
         <div className="col-md-4 col-12 mx-auto">
             
         <div className="card">
         <img src={props.imgSrc} className="card-img-top" alt={props.title} />
         <div className="card-body">
           <h5 className="card-title">{props.title}</h5>
           <p className="card-text">{getRenderedItems(props.descp)}</p>
           <span className="read-more" style={{cursor:'pointer'}} onClick={() => {
            props.readMoreBtn(props.id)
           }}>{props.btnName}</span>
         </div>
       </div>
         </div>
         </React.Fragment>
    )
}

export default Card;