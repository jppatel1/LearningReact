import React from 'react'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SignupFormContainer from './SignupFormContainer'
import Login from './Login'

class Home extends React.Component {
	constructor (){
		super();
		this.state = {
		
		}
	}

	render(){
		return(
			<div>
				<Navbar 
						logoClassName={"brand-logo left"}
						firstData = {"Login"}
						firstHref={"/login"}
						secondData = {"Signup"}
						secondHref={"/signup"}
				/>
				<Router>
					<Route path = "/signup" component = {SignupFormContainer} />
					<Route path = "/login" component = {Login} /> 
				</Router>
				<Footer />
			</div>
		)
	}
}


export default Home