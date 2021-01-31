import React from 'react'
import CommonPageHeader from './CommonPageHeader';
import headerContactImg from '../images/breadcrumb/contact.png';
const Contact = () => {
    return(
         <React.Fragment>
         <CommonPageHeader titleName="Contact" titleImageUrl={headerContactImg} />
         { /*  Contact Area Start */ }
         <section className="contact">
           <img className="left-img" src="assets/images/contact-left.png" alt="" />
           <div className="container">
             <div className="row justify-content-center">
               <div className="col-lg-8 col-md-10">
                 <div className="section-heading">
                   <h5 className="subtitle">
                     Contact Us
                   </h5>
                   <h2 className="title">
                     Get in Touch
                   </h2>
                   <p className="text">
                       It’s up to the competition in features, with some unique 
                       advantages.All the latest crypto games.Here are some of them.
                   </p>
                 </div>
               </div>
             </div>
             <div className="row justify-content-end">
               <div className="col-lg-6">
                 <div className="contact-form-wrapper">
                   <div className="contact-box">
                     <h4 className="title">
                       Send Us a Message
                     </h4>
                     <form action="#">
                       <input type="text" className="input-field" placeholder="Enter Your Full Name" />
                       <input type="email" className="input-field" placeholder="Enter Your Email Address" />
                       <textarea className="input-field textarea" placeholder="Message *"></textarea>
                       <button type="submit" className="mybtn1">SUBMIT NOW</button>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
           { /*  Contact Area End */ }
         </React.Fragment>
    )
}

export default Contact;