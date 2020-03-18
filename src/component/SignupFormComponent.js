import React from 'react'
import Button from  './Button'
import Login from './Conditional'
import { Redirect } from "react-router-dom";



/*class SignupFormComponent extends React.Component{
	

	render(){
		return(
				<div className="container">
					<form className="col s12" onSubmit ={this.handleSubmit}>
						<div className="row">
							<div className="input-field col s6">
								<input  
									name="firstName" 
									type="text" 
									placeholder = "First Name"
									onChange={this.props.handleChange} 
								/>
							</div>
							<div className="input-field col s6">
								<input 
									name="lastName" 
									type="text" 
									placeholder = "Last Name"
									onChange={this.props.handleChange} 
								/>
							</div>
						  </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="email" 
									type="email" 
									placeholder = "Email"
									onChange={this.props.handleChange}
								/>
							</div>
						 </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="confirmEmail" 
									type="email" 
									autoComplete = "nope"
									placeholder = "Confirm Email"
									onChange={this.props.handleChange}
								/>
							</div>
						 </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="password" 
									type="password"
									placeholder = "Password"
									onChange={this.props.handleChange}
								/>
							</div>
						  </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="confirmPassword" 
									type="password"
									placeholder = "Confirm Password"
									onChange={this.props.handleChange}
								/>
							</div>
						  </div>
						<div className="row">
							<p>
								<label className= "col s3">
									<input 
										className="with-gap" 
										name="gender" 
										type="radio"  
										value = "male"
										onChange={this.props.handleChange}
									/>
									<span>Male</span>
								</label>
								<label className= "col s3">
									<input 
										className="with-gap" 
										name="gender" 
										type="radio" 
										value = "female"
										onChange={this.props.handleChange}
									/>
									<span>Female</span>
								</label>
								<label className= "col s3">
									<input 
										className="with-gap" 
										name="gender" 
										type="radio" 
										value = "other"
										onChange={this.props.handleChange}
									/>
									<span>Other</span>
								</label>
								<label className= "col s3">
									<input 
										className="with-gap" 
										name="gender" 
										type="radio" 
										value = "preferNotToSay"
										onChange={this.props.handleChange}
									/>
									<span>prefer not to say</span>
								</label>
								<br/>
							</p>
						</div>
						<div className="row center">
							<button
								className= "waves-effect waves-light btn-large black"
							>Submit
							</button>
						</div>
					</form>
				</div>
			)
	}
}*/

const initialState = {
	firstNameError: "",
			lastNameError: "",
			passwordError: "",
			emailError: "",
			confirmEmailError: "",
			passwordError: "",
			genderError: ""
}

export default class ValiationForm extends React.Component {
	constructor(){
   	   super()
	   this.state ={
			...initialState
	   }
	   this.validate = this.validate.bind(this)
	}
	handleChange(event){
		const {name,value,type,checked} = event.target
		type === "checkbox" ? this.setState ({[name]: checked}) : this.setState ({[name]: value})
	}

	validate()  {
		console.log("inside Validate")
		var symbols = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
		var uppercaseLowercase = /^[A-Za-z]+$/
		let firstNameError = ""
		let lastNameError = ""
		let passwordError = ""
		let confirmPasswordError = ""
		let emailError = ""
		let confirmEmailError = ""
		let genderError =""
		// let passwordError = "";

		if (!this.props.data.firstName) {
			firstNameError = "First Name cannot be blank"
		}
		if(symbols.test(this.props.data.firstName) || /\d+/g.test(this.props.data.firstName)) {
			firstNameError = "First Name cannot contain Symbols or Numbers"
		}
		if (!this.props.data.lastName) {
			lastNameError = "Last Name field cannot be empty"
		}
		if(symbols.test(this.props.data.lastName) || /\d+/g.test(this.props.data.lastName)) {
			lastNameError = "Last Name cannot contain Symbols or Numbers"
		}
		if(this.props.data.email != this.props.data.confirmEmail){
			console.log("inside email check")
			confirmEmailError = "Emails dont match"
		}
		if(this.props.data.email === ""){
			emailError = "Email field cannot be empty"
		}
		if( this.props.data.confirmEmail === ""){
			confirmEmailError = "Confirm email field cannot be empty"
		}
		if (!symbols.test(this.props.data.password)) {
			passwordError = "Password must contain at least one character"
		}
		if (!/\d+/g.test(this.props.data.password)) {
			passwordError = "Password must contain at least one Number"
		}
		if (!/[a-z]/.test(this.props.data.password)) {
			passwordError = "Password must contain at least lowercase"
		}
		if (!/[A-Z]/.test(this.props.data.password)) {
			passwordError = "Password must contain at least uppercase"
		}
		if ((this.props.data.password).length <8 ) {
			passwordError = "Password must be greater then 8 characters"
		}
		if (!this.props.data.gender) {
			genderError = "Please select gender"
		}
		if(this.props.data.password != this.props.data.confirmPassword){
			confirmPasswordError = "Password dont match"
			console.log("went inside")
		}

		if (passwordError !=="" || confirmPasswordError !== "" || firstNameError !== "" || lastNameError!== "" || emailError!== "" || confirmEmailError !== "" || genderError!== "" ) {
			this.setState({ 
				passwordError,
				confirmPasswordError,
				firstNameError, 
				lastNameError,
				emailError,
				confirmEmailError,
				genderError
			});
			return false;
		}
		else{
			console.log("inside else")
			//this.setDefaultState()
		}

		return true;
	};


	handleSubmit = event => {
		event.preventDefault()
		const isValid = this.validate()
		if (isValid) {
			console.log(this.state)
			// clear form
			this.setState(initialState)
		}
	}

  render() {
	//console.log(this.props.data)
    return (
	  <div className="container">
					<form className="col s12" onSubmit ={this.handleSubmit}>
						<div className="row">
							<div className="input-field col s6">
								<input  
									name="firstName" 
									type="text" 
									placeholder = "First Name"
									onChange={this.props.handleChange} 
								/>
								<div style={{ fontSize: 12, color: "red" }}>
									{this.state.firstNameError}
								</div>
							</div>
							<div className="input-field col s6">
								<input 
									name="lastName" 
									type="text" 
									placeholder = "Last Name"
									onChange={this.props.handleChange} 
								/>
								<div style={{ fontSize: 12, color: "red" }}>
									{this.state.lastNameError}
								</div>
							</div>
						  </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="email" 
									type="email" 
									placeholder = "Email"
									onChange={this.props.handleChange}
								/>
								<div style={{ fontSize: 12, color: "red" }}>
									{this.state.emailError}
								</div>
							</div>
						 </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="confirmEmail" 
									type="email" 
									placeholder = "Confirm Email"
									onChange={this.props.handleChange}
								/>
								<div style={{ fontSize: 12, color: "red" }}>
									{this.state.confirmEmailError}
								</div>
							</div>
						 </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="password" 
									type="password"
									placeholder = "Password"
									onChange={this.props.handleChange}
								/>
								<div style={{ fontSize: 12, color: "red" }}>
									{this.state.passwordError}
								</div>
							</div>
						  </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="confirmPassword" 
									type="password"
									placeholder = "Confirm Password"
									onChange={this.props.handleChange}
								/>
								<div style={{ fontSize: 12, color: "red" }}>
									{this.state.confirmPasswordError}
								</div>
							</div>
						  </div>
						<div className="row">
							<p>
								<label className= "col s3">
									<input 
										className="with-gap" 
										name="gender" 
										type="radio"  
										value = "male"
										onChange={this.props.handleChange}
									/>
									<span>Male</span>
								</label>
								<label className= "col s3">
									<input 
										className="with-gap" 
										name="gender" 
										type="radio" 
										value = "female"
										onChange={this.props.handleChange}
									/>
									<span>Female</span>
								</label>
								<label className= "col s3">
									<input 
										className="with-gap" 
										name="gender" 
										type="radio" 
										value = "other"
										onChange={this.props.handleChange}
									/>
									<span>Other</span>
								</label>
								<label className= "col s3">
									<input 
										className="with-gap" 
										name="gender" 
										type="radio" 
										value = "preferNotToSay"
										onChange={this.props.handleChange}
									/>
									<span>prefer not to say</span>
								</label>
								<br/>
							</p>
						</div>
						<div style={{ fontSize: 12, color: "red" }}>
									{this.state.genderError}
								</div>
						<div className="row center">
							<button
								className= "waves-effect waves-light btn-large black"
							>Submit
							</button>
						</div>
					</form>
				</div>
    );
  }
}


//export default SignupFormComponent