import React from 'react';
import './footer.css';


const Footer = () => {
    function getYear() {
        return new Date().getFullYear();
    }
    return (
        <React.Fragment>
            <section className="footer-login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div style={{ display: 'flex', justifyContent: 'center' }}>Gopal Technologies ©{getYear()} All rights reserved.
                            Privacy Policy |
                            Terms of Service</div>

                        </div>

                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Footer;