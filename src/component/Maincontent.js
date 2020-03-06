import React from 'react';


function MainContent(){
	return(
	<div className="container">
		<form className="col s12">
			<div className="row col s6">
				<div className="input-field col s3">
					<h7>First Name</h7>
					<input id="first_name" type="text" className="validate"></input>
				</div>
				<div className="input-field col s3">
					<h7>Last Name</h7>
					<input id="last_name" type="text" className="validate"></input>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s6">
					<h7>Email</h7>
					<input id="email" type="email" className="validate"></input>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s6">
					<h7>confirm Email</h7>
					<input id="Confirm-email" type="email" className="validate"></input>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s6">
					<h7>password</h7>
					<input id="password" type="password" className="validate"></input>
				</div>
			</div>
			<div className="row center">
				<a class="waves-effect waves-light btn-large black">Submit</a>
			</div>
		</form>
	</div>
	)
}

export default MainContent