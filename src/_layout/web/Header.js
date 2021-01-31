
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return(
 
    <React.Fragment>
        
	<header className="header">
		<section className="top-header">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="content">
							<div className="left-content">
								<ul className="left-list">
									<li>
										<p>
											<i className="fas fa-headset"></i>	Support
										</p>
									</li>
									<li>
										<p>
											<i className="fas fa-envelope"></i>	info@Dooplo.com
										</p>
									</li>
		
								</ul>
							</div>
							<div className="right-content">
								
									<ul className="right-list">
										
											<li>
												<div className="notofication tm-dropdown">
													<i className="fas fa-bell"></i>
													<span className="count">11</span>
													<div className="tm-dropdown-menu">
															<ul className="list">
																<li>
																	<a href="#">
																		<i className="fas fa-bell"></i>
																		Invest Exchange
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fas fa-bell"></i>
																		Invest Exchange
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fas fa-bell"></i>
																		Invest Exchange
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fas fa-bell"></i>
																		Invest Exchange
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fas fa-bell"></i>
																		Invest Exchange
																	</a>
																</li>
															</ul>
														</div>
												</div>
											</li>
											<li>
												<a href="#" className="sign-in" data-toggle="modal" data-target="#login">
													<i className="fas fa-user"></i> Sign In
												</a>
											</li>
										</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
    </section>
    
    
		<div className="mainmenu-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">                 
						<nav className="navbar navbar-expand-lg navbar-light">
							<a className="navbar-brand" href="index-2.html">
								<img src="assets/images/logo.png" alt="" />
							</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
								aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse fixed-height" id="main_menu">
								<ul className="navbar-nav ml-auto">
								<li className="nav-item">
										<NavLink className="nav-link" to="/">Home
												<div className="mr-hover-effect"></div></NavLink>
									</li>


									<li className="nav-item">
										<NavLink className="nav-link" to="/about">About
												<div className="mr-hover-effect"></div></NavLink>
									</li>

									<li className="nav-item">
										<NavLink className="nav-link" to="/lottery">lottery
												<div className="mr-hover-effect"></div></NavLink>
									</li>
									
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">
											Game
											<div className="mr-hover-effect"></div>
										</a>
										<ul className="dropdown-menu" >
										<li><a className="dropdown-item" href="how-it-work.html"> <i className="fa fa-angle-double-right"></i>How It Work</a></li>
										<li><a className="dropdown-item" href="affiliate.html"> <i className="fa fa-angle-double-right"></i>Play</a></li>
										<li><a className="dropdown-item" href="awards.html"> <i className="fa fa-angle-double-right"></i>Awards</a></li>
										<li><a className="dropdown-item" href="awards.html"> <i className="fa fa-angle-double-right"></i>Faq</a></li>
										<li><a className="dropdown-item" href="terms-conditions.html"> <i className="fa fa-angle-double-right"></i>Terms & Condition</a></li>
										<li><a className="dropdown-item" href="terms-conditions-details.html"> <i className="fa fa-angle-double-right"></i>Condition Details</a></li>
							
										</ul>
									</li>
									<li className="nav-item">
											<NavLink className="nav-link" to="/contact">Contact
													<div className="mr-hover-effect"></div></NavLink>
										</li>
								</ul>
							
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
    </React.Fragment>

  
   )
}
export default Header;
