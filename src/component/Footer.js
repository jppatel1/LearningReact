import React from 'react';

class Footer extends React.Component{
	render(){
		const footerStyle = {
			position:"fixed",
			bottom:"0",
			left:"0",
			width:"100%"
		}
		return (
			<div>
				<footer className="page-footer nav-wrapper black lighten-2" style={footerStyle}>
				  <div className="footer-copyright">
						  2019 Copyright
					<a className="grey-text text-lighten-4 right" href="#!">Jay Patel</a>
				  </div>
				</footer>
			</div>
		)
	}
}

export default Footer