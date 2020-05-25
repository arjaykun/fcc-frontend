import React, {createRef, useState} from 'react';
import { useHistory } from 'react-router-dom'
import './Nav.css';
const Nav = () => {
	const navRef = createRef()
	const iconRef = createRef()
	const iconRef2 = createRef()
	const iconRef3 = createRef()
	const [show, setShow] = useState(false)
	const history = useHistory()

	const showNavs = () => {
		if(!show) {
			navRef.current.style.width = "100%";
			setShow(true)
		} else {
			hideNav()
		}
		toggleNavIconAnimation()
	}

	const toggleNavIconAnimation = () => {
		iconRef.current.classList.toggle('change')
		iconRef2.current.classList.toggle('change')
		iconRef3.current.classList.toggle('change')
	}

	const hideNav = () => {
		navRef.current.style.width = "0";
		toggleNavIconAnimation()
		setShow(false)
	}

	const goToNewRoute = (route) => {
		history.push(route)
		hideNav()
	}

	return (
		<div className="nav-wrapper">		
			
			<div className="nav" ref={navRef}>
				
        <button onClick={() => goToNewRoute('/')}>
        	Dashboard
        </button>
      
        <button onClick={() => goToNewRoute('quote-generator')}>
        	Random Quote Machine
        </button>
      
        <button onClick={() => goToNewRoute('/markdown-previewer')}>
        	Markdown Previewer
        </button>
        
			</div>

			<div className="nav-icon" onClick={showNavs}>
				<div className="bar1" ref={iconRef}></div>
				<div className="bar2" ref={iconRef2}></div>
				<div className="bar3" ref={iconRef3}></div>
			</div>
		</div>
	)
}

export default Nav;