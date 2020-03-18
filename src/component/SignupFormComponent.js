import React from 'react'
import Button from  './Button'
import Login from './Conditional'
import { Redirect } from "react-router-dom";
class SignupFormComponent extends React.Component{
	

	render(){
		console.log(this.props.data)
		return(
				<div className="container">
					<form className="col s12">
						<div className="row">
							<div className="input-field col s6">
								<input  
									name="firstName" 
									type="text" 
									onChange={this.props.handleChange} 
								/>
								<span><label>First Name</label></span>
							</div>
							<div className="input-field col s6">
								<input 
									name="lastName" 
									type="text" 
									onChange={this.props.handleChange} 
								/>
								<span><label>Last Name</label></span>
							</div>
						  </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="email" 
									type="email" 
									onChange={this.props.handleChange}
								/>
								<span><label>Email</label></span>
							</div>
						 </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="confirmEmail" 
									type="email" 
									autoComplete = "nope"
									onChange={this.props.handleChange}
								/>
								<span><label>Confirm Email</label></span>
							</div>
						 </div>
						<div className="row">
							<div className="input-field col s12">
								<input 
									name="password" 
									type="password" 
									onChange={this.props.handleChange}
								/>
								<span><label>Password</label></span>
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
							<Button
								buttonName = "Submit"
								className= "waves-effect waves-light btn-large black"
							/>
						</div>
					</form>
				</div>
			)
	}
}

export default SignupFormComponent