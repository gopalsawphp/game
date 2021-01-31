import React from 'react';

const Home = () => {
    return(
         <React.Fragment>
	<div className="hero-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="left-content">
						<div className="content">
							<h5 className="subtitle">
								Smart cryptocurrency
							</h5>
							<h1 className="title">
								for gaming
							</h1>
							<p className="text">
									Play, Invest,Exchange and Join the
									Contest with high rewards at Dooplo!	
							</p>
							<div className="links">
								<a href="#" className="mybtn1 link1">Get Started Now!</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
    

    {/* Hero Area End  */}
    

    	{/* About Area Start  */}
	<section className="about-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="about-box">
						<div className="about-box-inner">
							<div className="row">
								<div className="col-lg-6">
									<div className="video-area">
										<a href="https://www.youtube.com/watch?v=oj40TQirhss" className="video-play-btn2 play-video mfp-iframe">
											<i className="fas fa-play"></i>
											<span></span>
										</a>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="section-heading">
										<h5 className="subtitle">
											Our Journey in a Nutshell
										</h5>
										<h2 className="title">
											About Dooplo
										</h2>
										<p className="text">
												Dooplo is a unique cryptogames providing 
												pleasant pastime. We offer our members to play Provably Fair games and some bonus games, join contests, achieve various awards.
												
										</p>
										<a href="#" className="mybtn1">Read More </a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
    
        {/* About Area End  */}
        


	{/*Features Area Start  */}

	<section className="features">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
						an exhaustive list of 
						</h5>
						<h2 className="title">
								Amazing features
						</h2>
						<p className="text">
								It’s up to the competition in features, with some unique 
								advantages.All the latest crypto games.Here are some of them.
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="feature-box">
						<div className="feature-box-inner">
							<div className="row">
								<div className="col-lg-6 col-md-6">
									<div className="single-feature landscape">
										<div className="icon one">
											<img  src={process.env.PUBLIC_URL + '/assets/images/feature/icon1.png'} alt="" />
										</div>
										<div className="content">
											<h4 className="title">
												Exclusive Bonuses
											</h4>
											<a href="#" className="link">read more <i className="fas fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="single-feature landscape">
										<div className="icon three">
											<img src="assets/images/feature/payout.png" alt="" />
										</div>
										<div className="content">
											<h4 className="title">
													Instant Payout
											</h4>
											<a href="#" className="link">read more <i className="fas fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="single-feature landscape">
										<div className="icon two">
											<img src="assets/images/feature/icon2.png" alt="" />
										</div>
										<div className="content">
											<h4 className="title">
													Provably Fair
											</h4>
											<a href="#" className="link">read more <i className="fas fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="single-feature landscape">
										<div className="icon four">
											<img src="assets/images/feature/icon3.png" alt="" />
										</div>
										<div className="content">
											<h4 className="title">
													24/7 Support
											</h4>
											<a href="#" className="link">read more <i className="fas fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
    
    {/*Features Area End  */}

     {/*  Featured Game Area Start  */}
	<section className="featured-game">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
								Try to check out our
						</h5>
						<h2 className="title">
								featured games
						</h2>
						<p className="text">
								Check out our latest featured game! To meet today's challenges & earn cryptocurrency. Top 10 players receive prizes every hour!

						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="game-slider">
						<div className="item">
							<div className="single-game">
								<img src="assets/images/game/icon1.png" alt="" />
								<a href="#" className="mybtn2">PLay NoW !</a>
							</div>
						</div>
						<div className="item">
							<div className="single-game">
									<img src="assets/images/game/icon2.png" alt="" />
									<a href="#" className="mybtn2">PLay NoW !</a>
							</div>
						</div>
						<div className="item">
							<div className="single-game">
									<img src="assets/images/game/icon3.png" alt="" />
									<a href="#" className="mybtn2">PLay NoW !</a>
							</div>
						</div>
						<div className="item">
							<div className="single-game">
									<img src="assets/images/game/icon2.png" alt="" />
									<a href="#" className="mybtn2">PLay NoW !</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>

        {/* Featured Game Area	End  */}
  {/* Latest Activities Area Start  */}
	<section className="activities">
			<img className="shape shape1" src="assets/images/people/shape1.png" alt="" />
			<img className="shape shape2" src="assets/images/people/shape2.png" alt="" />
			<img className="shape shape3" src="assets/images/people/shape3.png" alt="" />
		   <div className="container">
			   <div className="row justify-content-center">
				   <div className="col-lg-8 col-md-10">
					   <div className="section-heading">
						   <h5 className="subtitle">
							   The Smarter Way 
						   </h5>
						   <h2 className="title">
							   Lend and Borrow
						   </h2>
						   <p className="text">
							   The World's First Crypto Lending Marketplace and 
							   Affordable and competitive interest rates
						   </p>
					   </div>
				   </div>
			   </div>
			   <div className="row">
				   <div className="col-lg-12">
					   <div className="tab-menu-area">
						   <ul className="nav nav-lend mb-3" id="pills-tab" role="tablist">
							   <li className="nav-item">
								   <a className="nav-link active" id="pills-all-bets-tab" data-toggle="pill" href="#pills-all-bets" role="tab" aria-controls="pills-all-bets" aria-selected="true">All bets</a>
							   </li>
							   <li className="nav-item">
								   <a className="nav-link" id="pills-my-bets-tab" data-toggle="pill" href="#pills-my-bets" role="tab" aria-controls="pills-my-bets" aria-selected="false">my bets</a>
							   </li>
							   <li className="nav-item">
								   <a className="nav-link" id="pills-my-jackpots-tab" data-toggle="pill" href="#pills-my-jackpots" role="tab" aria-controls="pills-my-jackpots" aria-selected="false">jackpots</a>
							   </li>
						   </ul>
					   </div>
					   <div className="tab-content" id="pills-tabContent">
						   <div className="tab-pane fade show active" id="pills-all-bets" role="tabpanel" aria-labelledby="pills-all-bets-tab">
							   <div className="responsive-table">
								   <table className="table">
								   <thead>
									   <tr>
									   <th scope="col">USER</th>
									   <th scope="col">BET ID</th>
									   <th scope="col">BET AMOUNT</th>
									   <th scope="col">CHANCE</th>
									   <th scope="col">GAME</th>
									   <th scope="col">PROFIT</th>
									   </tr>
								   </thead>
								   <tbody>
									   <tr>
										   <td>
											   <img src="assets/images/people/p1.png" alt="" />
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   <img src="assets/images/icon1.png" alt="" />
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   <td>
											   <img src="assets/images/icon1.png" alt="" />
											   0.00000051
										   </td>
									   </tr>
									   <tr>
										   <td>
											   <img src="assets/images/people/p2.png" alt="" />
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   <img src="assets/images/icon2.png" alt="" />
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   <td>
											   <img src="assets/images/icon2.png" alt="" />
											   0.00000051
										   </td>
									   </tr>
									   <tr>
										   <td>
											   <img src="assets/images/people/p3.png" alt="" />
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   <img src="assets/images/icon3.png" alt="" />
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   <td>
											   <img src="assets/images/icon3.png" alt="" />
											   0.00000051
										   </td>
									   </tr>
									   <tr>
										   <td>
											   <img src="assets/images/people/p4.png" alt="" />
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   <img src="assets/images/icon4.png" alt="" />
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   <td>
											   <img src="assets/images/icon4.png" alt="" />
											   0.00000051
										   </td>
									   </tr>
									   <tr>
										   <td>
											   <img src="assets/images/people/p5.png" alt="" />
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   <img src="assets/images/icon5.png" alt="" />
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   <td>
											   <img src="assets/images/icon5.png" alt="" />
											   0.00000051
										   </td>
									   </tr>
									   <tr>
										   <td>
											   <img src="assets/images/people/p6.png" alt="" />
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   <img src="assets/images/icon1.png" alt="" />
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   <td>
											   <img src="assets/images/icon1.png" alt="" />
											   0.00000051
										   </td>
									   </tr>
									   <tr>
										   <td>
											   <img src="assets/images/people/p1.png" alt="" />
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   <img src="assets/images/icon2.png" alt="" />
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   <td>
											   <img src="assets/images/icon2.png" alt="" />
											   0.00000051
										   </td>
									   </tr>
									   <tr>
										   <td>
											   <img src="assets/images/people/p2.png" alt="" />
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   <img src="assets/images/icon3.png" alt="" />
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   <td>
											   <img src="assets/images/icon3.png" alt="" />
											   0.00000051
										   </td>
									   </tr>
									   <tr>
										   <td>
											   <img src="assets/images/people/p3.png" alt="" />
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   <img src="assets/images/icon4.png" alt="" />
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   <td>
											   <img src="assets/images/icon4.png" alt="" />
											   0.00000051
										   </td>
									   </tr>
									   <tr>
										   <td>
											   <img src="assets/images/people/p4.png" alt="" />
											   Tom Bass
										   </td>
										   <td>
											   b799b8724b
										   </td>
										   <td>
											   <img src="assets/images/icon5.png" alt="" />
											   0.00000051
										   </td>
										   <td>70%</td>
										   <td>Dice</td>
										   <td>
											   <img src="assets/images/icon5.png" alt="" /> 
											   0.00000051
										   </td>
									   </tr>
								   </tbody>
								   </table>
							   </div>
						   </div>
						   <div className="tab-pane fade" id="pills-my-bets" role="tabpanel" aria-labelledby="pills-my-bets-tab">
							   <div className="responsive-table">
									   <table className="table">
											   <thead>
												   <tr>
												   <th scope="col">USER</th>
												   <th scope="col">BET ID</th>
												   <th scope="col">BET AMOUNT</th>
												   <th scope="col">CHANCE</th>
												   <th scope="col">GAME</th>
												   <th scope="col">PROFIT</th>
												   </tr>
											   </thead>
											   <tbody>
												   <tr>
													   <td>
														   <img src="assets/images/people/p1.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon1.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon1.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p2.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon2.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon2.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p3.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon3.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon3.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p4.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon4.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon4.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p5.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon5.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon5.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p6.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon1.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon1.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p1.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon2.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon2.png" alt=""  />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p2.png" alt=""  />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon3.png" alt=""  />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon3.png" alt=""  />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p3.png" alt=""  />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon4.png" alt=""  />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon4.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p4.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon5.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon5.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
											   </tbody>
											   </table>
							   </div>
						   </div>
						   <div className="tab-pane fade" id="pills-my-jackpots" role="tabpanel" aria-labelledby="pills-my-jackpots-tab">
							   <div className="responsive-table">
									   <table className="table">
											   <thead>
												   <tr>
												   <th scope="col">USER</th>
												   <th scope="col">BET ID</th>
												   <th scope="col">BET AMOUNT</th>
												   <th scope="col">CHANCE</th>
												   <th scope="col">GAME</th>
												   <th scope="col">PROFIT</th>
												   </tr>
											   </thead>
											   <tbody>
												   <tr>
													   <td>
														   <img src="assets/images/people/p1.png" alt=""  />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon1.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon1.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p2.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon2.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon2.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p3.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon3.png" alt=""  />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon3.png" alt=""  />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p4.png" alt=""  />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon4.png" alt=""  />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon4.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p5.png" alt=""  />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon5.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon5.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p6.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon1.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon1.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p1.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon2.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon2.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p2.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon3.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon3.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p3.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon4.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon4.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
												   <tr>
													   <td>
														   <img src="assets/images/people/p4.png" alt="" />
														   Tom Bass
													   </td>
													   <td>
														   b799b8724b
													   </td>
													   <td>
														   <img src="assets/images/icon5.png" alt="" />
														   0.00000051
													   </td>
													   <td>70%</td>
													   <td>Dice</td>
													   <td>
														   <img src="assets/images/icon5.png" alt="" />
														   0.00000051
													   </td>
												   </tr>
											   </tbody>
											   </table>
							   </div>
						   </div>
					   </div>
				   </div>
			   </div>
		   </div>
		   { /* Fun fact Area Start */ }
		   <div className="funfact">
			   <div className="container">
				   <div className="row">
					   <div className="col-lg-4">
						   <div className="single-fun">
							   <img src="assets/images/funfact/icon1.png" alt="" />
							   <div className="count-area">
								   <div className="count">93K</div>
							   </div>
							   <p>
								Players
							   </p>
						   </div>
					   </div>
					   <div className="col-lg-4">
						   <div className="single-fun">
							   <img src="assets/images/funfact/icon2.png" alt="" />
							   <div className="count-area">
								   <div className="count">99+</div>
							   </div>
							   <p>
									   Games
							   </p>
						   </div>
					   </div>
					   <div className="col-lg-4">
						   <div className="single-fun">
							   <img src="assets/images/funfact/icon3.png" alt="" />
							   <div className="count-area">
								   <div className="count">70+</div>
							   </div>
							   <p>
									   Winners
							   </p>
						   </div>
					   </div>
				   </div>
			   </div>
           </div>
             { /* Fun fact Area End */ }
       </section> 
         { /*Latest Activities Area End */ }


            { /* Get Start Area Start */ }
	 <section className="get-start">
		<div className="container">
			<div className="row">
				<div className="col-lg-7 d-flex align-self-center">
					<div className="left-area">
						<div className="section-heading">
							<h5 className="subtitle">
								every day lots of  wins
							</h5>
							<h2 className="title ">
									be one of them
							</h2>
							<p className="text">
									Get started in less than 5 min - no credit card 
									required.Gain early access to Dooplo and  experience crypto like never before. 
							</p>
							<a href="#" className="mybtn1">Play  Now!</a>
						</div>
					</div>
				</div>
				<div className="col-lg-5">
					<div className="right-image">
						<img src="assets/images/get-start.png" alt="" />
					</div>
				</div>
			</div>
		</div>
    </section> 
     { /*Get Start Area End*/ }
 { /* Recent Winners Area Start */ }
	<section className="recent-winners">
			<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-10">
							<div className="section-heading">
								<h5 className="subtitle">
									Try to Check out our
								</h5>
								<h2 className="title">
										Recent Winners
								</h2>
								<p className="text">
									We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="single-winer">
								<div className="top-area">
									<div className="left">
										<h4 className="name">
												Leroy Roy 
										</h4>
										<p className="date">
												01.08.2019
										</p>
									</div>
									<div className="right">
										<p className="id">#5747e75482</p>
									</div>
								</div>
								<div className="bottom-area">
									<div className="left">
											0.099 ETH
									</div>
									<div className="right">
											<img src="assets/images/icon2.png" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-winer">
								<div className="top-area">
									<div className="left">
										<h4 className="name">
												Jeff Mack
										</h4>
										<p className="date">
												01.08.2019
										</p>
									</div>
									<div className="right">
										<p className="id">#5747e75482</p>
									</div>
								</div>
								<div className="bottom-area">
									<div className="left">
											0.099 ETH
									</div>
									<div className="right">
											<img src="assets/images/icon2.png" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-winer">
								<div className="top-area">
									<div className="left">
										<h4 className="name">
												Neal Morris
										</h4>
										<p className="date">
												01.08.2019
										</p>
									</div>
									<div className="right">
										<p className="id">#5747e75482</p>
									</div>
								</div>
								<div className="bottom-area">
									<div className="left">
											0.099 ETH
									</div>
									<div className="right">
											<img src="assets/images/icon2.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 text-xl-center">
							<a className="mybtn2" href="#">View All </a>
						</div>
					</div>
			</div>
		</section> 


















         </React.Fragment>
    )
}

export default Home;