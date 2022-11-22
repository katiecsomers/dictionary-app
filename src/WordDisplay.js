import React from "react";
import "./WordDisplay.css";
import Meanings from "./Meanings.js";
import Phonetics from "./Phonetics";

export default function WordDisplay(props) {
	console.log(props.data);
	if (props.data) {
		return (
			<div className="WordDisplay">
				<h2>{props.data[0].word}</h2>
				<Phonetics Phonetics={props.data[0].phonetics} />

				{props.data.map(function (meanings, index) {
					return (
						<div key={index}>
							<Meanings data={meanings} />{" "}
						</div>
					);
				})}
			</div>
		);
	}
}
