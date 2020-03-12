import React from 'react'

class Button extends React.Component{
	render(){
		return(
			<a href={this.props.Href} className={this.props.className}>{this.props.buttonName}</a>
		)
	}
}

export default Button