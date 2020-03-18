import React from 'react';
import SignupFormComponent from './SignupFormComponent'


class SignupFormContainer extends React.Component{
	constructor(){
		super()
		this.state ={
			firstName : "",
			lastName : "",
			email : "",
			confirmEmail : "",
			password : "",
			gender : ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		const {name,value,type,checked} = event.target
		type === "checkbox" ? this.setState ({[name]: checked}) : this.setState ({[name]: value})
	}


	render(){
		return(
		<div>
			<SignupFormComponent 
					handleChange={this.handleChange}
					data ={this.state}
			/>
		</div>
		)
	}
}

export default SignupFormContainer