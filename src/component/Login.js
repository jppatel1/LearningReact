import React from 'react'
import Navbar from './Navbar'
import Conditional from './Conditional'
import Footer from './Footer'
import car from './back.jpg'

const initialState = {
	emailError: ""
}

class Login extends React.Component {
	constructor (){
		super()
		this.state = {
			isLoading : false,
			email : "",
			password : "",
			...initialState
		}
		this.handleChange = this.handleChange.bind(this)
		this.validate = this.validate.bind(this)
	}

	handleChange(event){
		const {name,value,type,checked} = event.target
		type === "checkbox" ? this.setState ({[name]: checked}) : this.setState ({[name]: value})
	}
	
	validate()  {
		let emailError = ""

		if(this.state.email === ""){
			emailError = "Email field cannot be empty"
		}
		if(!this.state.email.includes("@") || ((this.state.email.length-1) ===  this.state.email.indexOf("@")) || (this.state.email.indexOf("@") === 0) || !this.state.email.includes(".") || (this.state.email.split("@").length-1 >1 )){
			emailError = "Email format not valid"
		}
		console.log(this.state.email.indexOf("@"))
		console.log(this.state.email.length)
		if ( emailError !== "" ) {
			this.setState({ 
				emailError,
			});
			return false;
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

	render(){
		let loginCard = {
			background : 'rgba(0,0,0,0.0)'
		}
		return(
			<div >
				{this.state.isLoading ? 
					<div>
						<Navbar 
							logoClassName="brand-logo center"
						/>
						<Conditional />
						<Footer />
					</div>
					:
					<div>
						<Navbar 
							logoClassName="brand-logo center"
						/>
						<div className = "container " styles={{ backgroundImage:`url(${car})` }}>
							<div className = "container ">
								<div className = "row ">
									<div className = "col s12 14 offset-14 ">
										<div className = "container">
											<div className = "card" style={loginCard}>
												<div className = "card-action center black lighten-2 white-text">
													<h4> Login Form </h4>
												</div>
												<div className = "card-content">
													<div className = "form-field">
														<br/>
														<br/>
														<input 
															name="email" 
															type="email" 
															placeholder = "Email"
															onChange={this.handleChange}
														/>
													</div>
													<div style={{ fontSize: 12, color: "red" }}>
														{this.state.emailError}
													</div>
													<br/>
													<div className = "form-field">
														<input 
															type = "password"
															value = {this.state.password}
															name = "password"
															placeholder = "Password"
															onChange = {this.handleChange}
														/>
													</div>
													<br/>
													<div className = "form-field">
														<label>
															<input
																type="checkbox"
																name="isFriendly"
																checked = {this.state.isFriendly}
																onChange = {this.handleChange}
																/><span >Remember me</span>
														</label>
													</div>
													<br/>
													<div className="row center">
														<button
															className= "waves-effect waves-light btn-large black"
															onClick = {this.handleSubmit}
														>Submit
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Footer />
					</div>
				}	
			</div>
		)
	}
}




export default Login