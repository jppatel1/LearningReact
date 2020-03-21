import React from 'react'


class Navbar extends React.Component{
    render() {
        return(
		    <nav>
                <div className= "nav-wrapper black lighten-2">
                  <a href="#!" className={this.props.logoClassName}><img src={require('./logo.png') }alt="My logo" height={"auto"} width={70} mode='fit'  /></a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href={this.props.sixthHref}>{this.props.sixthData}</a></li>
                    <li><a href={this.props.fifthHref}>{this.props.fifthData}</a></li>
                    <li><a href={this.props.fourthHref}>{this.props.fourthData}</a></li>
                    <li><a href={this.props.thirdHref}>{this.props.thirdData}</a></li>
                    <li><a href={this.props.secondHref}>{this.props.secondData}</a></li>
                    <li><a href={this.props.firstHref}>{this.props.firstData}</a></li>
                  </ul>
                </div>
             </nav>
	    )
	}
}

export default Navbar