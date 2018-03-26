import React from "react";
import "./Nav.css";

const Nav = props => 
	
	<div className="navbar navbar-default">
		<span className="left"><h4>{props.message}</h4></span>
		<span className = "right">points: {props.score} | high score: {props.highScore}</span>

	</div>

	export default Nav;