import React from 'react'

class Input extends React.Component{
	render(){
		return(
			<label className={this.props.divClassName}>
				<input id={this.props.inputId} name= {this.props.inputName} type={this.props.inputType} className={this.props.inputClassName} autoComplete ={this.props.autocomplete}></input>
				<span className={this.props.spanClassName} data-error="wrong" data-success="right">{this.props.fieldName}</span>
			</label>
		)
	}
}


export default Input