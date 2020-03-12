import React from 'react'
import './App.css'
import Footer from './Footer'
import MainContent from './Maincontent'
import Navbar from './Navbar'


class Signup extends React.Component{
	constructor(){
		super()
		this.state = {
			navbarClassName : "nav-wrapper yellow lighten-2"
		}
	}
	render(){
	console.log(React.version)
		return(
			<div>
				<Navbar 
					navbarClassName="nav-wrapper black lighten-2" 
					logoClassName="brand-logo center"
				/>
				<MainContent />
				<Footer />
			</div>
		)
	}
}


/*class Signup extends React.Component{
	constructor(){
		super()
		this.state = {
			isLoggedIn : true
		}
	}
	render(){
		return(
			<div>
				<h1>You are currently logged {this.state.isLoggedIn  ? "in" : "out"}</h1>
			</div>
		)
	}
}*/

export default Signup
