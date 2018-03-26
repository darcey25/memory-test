import React from "react";
import "./Card.css";

const Card = props => 	

	<div className="card" key={props.id} onClick={() => props.onClick(props.id)} >
		<img className="image" alt={props.img} src={props.img} />
	</div>
export default Card;