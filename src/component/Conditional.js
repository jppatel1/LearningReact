import React from 'react'
import Loading from './loading.gif'

function Conditional(props){
	return(
		<div>
					<div className="row">
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row center">
							<img src={Loading} width="120" height="120" alt="loading..." />
						</div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
					</div>
		</div>
	)
	}

export default Conditional