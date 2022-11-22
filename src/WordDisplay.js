import React from "react";
import Phonetics from "./Phonetics";
import "./WordDisplay.css";

export default function WordDisplay(props) {
	if (props.data) {
		let meanings = props.data.meanings;

		return (
			<div className="WordDisplay">
				<h3>{props.data.word}</h3>
				<Phonetics Phonetics={props.data.phonetics} />

				{meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<br />
							<h4>{meaning.partOfSpeech}</h4>

							<div className="definitions">
								{meaning.definitions.map(function (definition, index) {
									return <div key={index}> - {definition.definition}</div>;
								})}
							</div>
							<div>
								{meaning.synonyms.map(function (synonym, index) {
									return (
										<div
											className="synonyms"
											key={index}
										>
											{" "}
											{synonym}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
