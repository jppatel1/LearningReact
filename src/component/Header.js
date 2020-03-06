import React from 'react';
import './App.css'
import logo from './logo.png'


function Header(){
	return(
		<div>
		    <nav>
                <div className="nav-wrapper black lighten-2">
                    <a href="index.html" class="brand-logo center">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                </ul>
               </div>
            </nav>
		</div>
	)
}

export default Header