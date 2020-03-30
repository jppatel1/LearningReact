import React from 'react';
import SignupFormContainer from './SignupFormContainer'
import Login from './Login'
import Home from './Home'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

function MainContent (){
	return(
		<div>
			<Router>
				<Route path = "/home" component = {Home} /> 
				<Route path = "/signup" component = {SignupFormContainer} />
				<Route path = "/login" component = {Login} /> 
			</Router>
		</div>
	)
}

export default MainContent