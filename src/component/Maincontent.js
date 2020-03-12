import React from 'react';
import Input from './Input'


class MainContent extends React.Component{
	render(){
		return(
			<div className="container">
				<form className="col s12">
					<div className="row">
						<Input 
							divClassName = "input-field col s6"
							fieldName = "First Name"
							inputId = "first_name" 
							inputType = "text"
							inputClassName = "validate"
						/>
						<Input 
							divClassName = "input-field col s6"
							fieldName = "Last Name"
							inputId = "last_name" 
							inputType = "text"
							inputClassName = "validate"
						/>
					</div>
					<div className="row">
						<Input 
							divClassName = "input-field col s12"
							inputId = "email" 
							inputType = "text"
							fieldName="Email"
							inputClassName = "validate"
							spanClassName ="helper-text"
						/>
					</div>
					<div className="row">
						<Input 
							divClassName = "input-field col s12"
							fieldName = "Confirm Email"
							inputId = "confirm-email" 
							inputType = "text"
							inputClassName = "validate"
							autocomplete = "nope"
						/>
					</div>
					<div className="row">
						<Input 
							divClassName = "input-field col s12"
							fieldName = "Password"
							inputId = "password" 
							inputType = "password"
							inputClassName = "validate"
						/>
					</div>
					<div className="row">
						<Input 
							divClassName = "input-field col s3"
							fieldName = "Male"
							inputType = "radio"
							inputClassName = "with-gap"
							inputName ="gender"
						/>
						<Input 
							divClassName = "input-field col s3"
							inputType = "radio"
							fieldName = "Female"
							inputClassName = "with-gap"
							inputName ="gender"
						/>
						<Input 
							divClassName = "input-field col s3"
							inputType = "radio"
							fieldName = "Other"
							inputClassName = "with-gap"
							inputName ="gender"
						/>
						<Input 
							divClassName = "input-field col s3"
							inputType = "radio"
							fieldName = "Prefer not to say"
							inputClassName = "with-gap"
							inputName ="gender"
						/>
					</div>
					<div className="row center">
						<a href="#!" className="waves-effect waves-light btn-large black">Submit</a>
					</div>
				</form>
			</div>
		)
	}
}

export default MainContent