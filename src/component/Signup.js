import React from 'react'
import './App.css'
import Footer from './Footer'
import MainContent from './Maincontent'
import Navbar from './Navbar'
import Conditional from './Conditional'
import PropTypes from 'prop-types'
import { BrowserRouter, Redirect } from 'react-router-dom'

/*class Signup extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    setTimeout(() => {
      window.location = 'https://www.google.com';
    }, 5000)
  }

  render() {
    return (
      <MainContent/>
    )
  }
}*/


class Signup extends React.Component{
	constructor(){
		super()
		this.state = {
			isLoading : false
		}
	}


	render(){
		return(
		<div>
			{this.state.isLoading ? 
				<div>
					<Navbar 
						logoClassName="brand-logo center"
						firstData = "hello"
						firstHref = "#!"
					/>
					<Conditional />
					<Footer />
				</div>
				:
				<div>
					<Navbar 
						navbarClassName="nav-wrapper black lighten-2" 
						logoClassName="brand-logo center"
					/>
					<MainContent />
					<Footer />
				</div>
				}
		</div>
		)
	}
}


/*class Signup extends React.Component{
	constructor(){
		super()
		this.state = {
			count : 0
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleClick1 = this.handleClick1.bind(this)
		this.reset = this.reset.bind(this)
	}
	handleClick(){
		this.setState((prevState) => 
			this.state.count = prevState.count +1
		)
	}
	handleClick1(){
		this.setState((prevState) => 
			this.state.count = prevState.count *2
		)
	}
	reset(){
		this.setState((prevState) => 
			this.state.count = 0
		)
	}
	render(){
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick= {this.handleClick}>Change!</button>
				<button onClick= {this.handleClick1}>Twice</button>
				<button onClick= {this.reset}>Reset</button>
			</div>
		)
	}
}*/

/*class Signup extends React.Component{
	constructor(){
		super()
		this.state={
			isLoading : true
		}
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({
				isLoading : false
			})
		}, 15000)
	}

	render(){
		return(
			<div>
				{this.state.isLoading? <Conditional />:<h1>Loaded</h1>}
			</div>
		)
	}
}*/


/*class Signup extends React.Component{
	constructor(){
		super()
		this.state = {
			isLoggedIn : false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState((prevState) => 
			this.state.isLoggedIn = !this.state.isLoggedIn
		)
	}

	render(){
		let buttonText = this.state.isLoggedIn ? "LOG IN" : "LOG OUT"
		let displayText = this.state.isLoggedIn ? "LOGGED OUT" : "LOGGED In"
		return(
			<div>
				<h1> you are  {displayText}</h1>
				<button onClick={this.handleClick}>{buttonText}</button>
			</div>
		)
	}
}*/

/*class Signup extends React.Component{
	constructor(){
		super()
		this.state ={
		
		}
	}

	render(){
		return(
			<div>
				<h1> code goes here </h1>
			</div>
		)
	}
}*/

/*class Signup extends React.Component{
	constructor(){
		super()
		this.state ={
			loading : false,
			character : {}
		}
	}

	componentDidMount(){
		this.setState({
			loading: true
		})
		fetch("https://swapi.co/api/people/1/").then(response => response.json()).then(data => {
			this.setState ({
				character :data,
				loading : false
			})
		})
	}

	render(){
		return(
			<div>
				{this.state.loading? <Conditional /> : <h1> Name : {this.state.character.name}</h1>}
			</div>
		)
	}
}*/

/*class Signup extends React.Component{
	constructor(){
		super()
		this.state ={
			firstName : "",
			lastName : "",
			isFriendly : '',
			gender : "",
			favColor : "blue"
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		const {name,value,type,checked} = event.target
		type === "checkbox" ? this.setState ({[name]: checked}) : this.setState ({[name]: value})
	}

	render(){
		return(
			<form className = "container">
				<input 
					type= "text" 
					value = {this.state.firstName} 
					name = "firstName" 
					placeholder = "First Name" 
					onChange = {this.handleChange}
					/>
				<br/>
				<input 
					type= "text" 
					value = {this.state.lastName} 
					name = "lastName" 
					placeholder = "Last Name" 
					onChange = {this.handleChange}
					/>
				<textarea 
					type= "text" 
					value = {"some default value"} 
					name = "lastName" 
					placeholder = "Last Name" 
					onChange = {this.handleChange}
					/>
					<br/>
				<label>
					<input
						type="checkbox"
						name="isFriendly"
						checked = {this.state.isFriendly}
						onChange = {this.handleChange}
						/><span>Red</span>
				</label>
				<br/>
				<label>
					<input
						type="radio"
						name="gender"
						value = "male"
						checked = {this.state.gender === "male"}
						onChange = {this.handleChange}
						/><span> Male </span>
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						value = "female"
						checked = {this.state.gender === "female"}
						onChange = {this.handleChange}
						/><span> Female </span>
				</label>
				<br/>


				<div className="input-field col s12">
				<label>Materialize Select</label>
					<select 
						value={this.state.favColor} 
						onChange={this.handleChange} 
						name="favColor"
					>
					  <option value="blue">Option 1</option>
					  <option value="2">Option 2</option>
					  <option value="3">Option 3</option>
					</select>
				  </div>
				<h1> {this.state.firstName} {this.state.lastName}</h1>
			</form>
		)
	}
}*/

export default Signup
