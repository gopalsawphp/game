import React from 'react';
const LginPopup = () => {
    function getYear() {
        return new Date().getFullYear();
    }
    return (
        <React.Fragment>
        <div class="modal fade login-modal" id="login" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="modal-body">
                <div class="logo-area">
                        <img class="logo" src="assets/images/logo.png" alt=""/>
                </div>
                <div class="header-area">
                    <h4 class="title">Great to have you back!</h4>
                    <p class="sub-title">Enter your details below.</p>
                </div>
                <div class="form-area">
                    <form action="#"  method="POST">
                        <div class="form-group">
                                <label for="login-input-email">Email*</label>
                                <input type="email" class="input-field" id="login-input-email"  placeholder="Enter your Email"/>
                        </div>
                        <div class="form-group">
                                <label for="login-input-password">Password*</label>
                                <input type="password" class="input-field" id="login-input-password"  placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <div class="box">
                                <div class="left">
                                        <input type="checkbox" class="check-box-field" id="input-save-password" checked />
                                    <label for="input-save-password">Remember Password</label>
                                </div>
                                <div class="right">
                                    <a href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                               <button type="submit" class="mybtn1">Log In</button>
                        </div>
                    </form>
                </div>
                <div class="form-footer">
                    <p>Not a member? 
                            <a href="#">Create account <i class="fas fa-angle-double-right"></i></a>
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div> 
        </React.Fragment>
    )
}

export default LginPopup;