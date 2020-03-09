import React from 'react'

function Input(props){
	return(
		<label className={props.divClassName}>
			<input id={props.inputId} name= {props.inputName} type={props.inputType} className={props.inputClassName}></input>
			<span>{props.fieldName}</span>
		</label>
	)
}


export default Input