import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";
import { Link } from 'react-router-dom';
const Main = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <div>
    
    <header>
      
			<h3>PAY ONLINE </h3>
			<nav ref={navRef}>
				<a href="/#">HOME</a>
        <Link to="About"><a href="/#">ABOUT</a></Link>
				<a href="/#">HELP</a>
				<a href="/#">CONTACT</a>
        
      
        <div className='Boys'>
        <Link to="Loginsignup"><a href="/#">SignIn</a></Link>
        </div>
				{/* <button
					className="nav1"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>
			<button
				className="nav2"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    </div>
  );
};

export default Main;