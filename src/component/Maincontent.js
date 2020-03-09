import React from 'react';


function MainContent(){
	return(
	<div className="container">
		<form className="col s12">
			<div className="row">
				<div className="input-field col s6">
					<h6>First Name</h6>
					<input id="first_name" type="text" className="validate"></input>
				</div>
				<div className="input-field col s6">
					<h6>Last Name</h6>
					<input id="last_name" type="text" className="validate"></input>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
					<h6>Email</h6>
					<input id="email" type="email" className="validate"></input>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
					<h6>Confirm Email</h6>
					<input id="Confirm-email" type="email" className="validate"></input>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
					<h6>Password</h6>
					<input id="password" type="password" className="validate"></input>
				</div>
			</div>
			<div className="row center">
				<a href="#!" className="waves-effect waves-light btn-large black">Submit</a>
			</div>
		</form>
	</div>
	)
}

export default MainContent