import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
	if (props.Phonetics) {
		return props.Phonetics.map(function (phonetic, index) {
			return (
				<div
					className="Phonetics"
					key={index}
				>
					<h5>{phonetic.text}</h5>
					<audio
						controls
						key={phonetic.audio}
					>
						<source
							src={phonetic.audio}
							type="audio/mp3"
						/>
						Your browser does not support the audio element.
					</audio>
				</div>
			);
		});
	} else {
		return null;
	}
}
