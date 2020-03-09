import React from 'react';
import './App.css'
import logo from './logo.png'


function Header(){
	return(
		<div>
		    <nav>
                <div className="nav-wrapper black lighten-2">
                    <a href="index.html" class="brand-logo center"><img src={require('./logo.png') }alt="My logo" height={"auto"} width={70} mode='fit'  /></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                </ul>
               </div>
            </nav>
		</div>
	)
}

export default Header