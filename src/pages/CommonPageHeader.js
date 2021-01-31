import React from 'react';
import { Link } from 'react-router-dom';

const CommonPageHeader = (props) => {

    return (
        <React.Fragment>
        <section className="breadcrumb-area bc-lottery">
		<img className="bc-img" src={props.titleImageUrl} alt="" />
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<h4 className="title">
						{props.titleName}
					</h4>
					<ul className="breadcrumb-list">
						<li>
							<Link to="">
									<i className="fas fa-home"></i>
									Home
							</Link>
						</li>
						<li>
							<span><i className="fas fa-chevron-right"></i> </span>
						</li>
						<li>
							<Link to="/lottery"> {props.titleName}</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	{/*Breadcrumb Area End  */}
        </React.Fragment>
    )
};

export default CommonPageHeader