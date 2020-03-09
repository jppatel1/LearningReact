import React from 'react'


function Navbar(props){
console.log(props)
	return(
		<nav>
            <div className= {props.navbarClassName}>
              <a href="#!" className={props.logoClassName}><img src={require('./logo.png') }alt="My logo" height={"auto"} width={70} mode='fit'  /></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href={props.sixthHref}>{props.sixthData}</a></li>
                <li><a href={props.fifthHref}>{props.fifthData}</a></li>
                <li><a href={props.fourthHref}>{props.fourthData}</a></li>
                <li><a href={props.thirdHref}>{props.thirdData}</a></li>
                <li><a href={props.secondHref}>{props.secondData}</a></li>
                <li><a href={props.firstHref}>{props.firstData}</a></li>
              </ul>
            </div>
          </nav>
	)
}

export default Navbar