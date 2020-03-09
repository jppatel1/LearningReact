import React from 'react'
import './App.css'
import Footer from './Footer'
import MainContent from './Maincontent'
import Navbar from './Navbar'

function App(){
	return(
		<div>
			<Navbar 
				navbarClassName="nav-wrapper black lighten-2" 
				logoClassName="brand-logo center"
			/>
			<MainContent />
			<Footer />
		</div>
	)
}

export default App
