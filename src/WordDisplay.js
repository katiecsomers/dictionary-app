import React from "react";

export default function WordDisplay(props) {
	console.log(props.data);

	if (props.data) {
		let meanings = props.data.meanings;
		return (
			<div className="WordDisplay">
				<h3>{props.data.word}</h3>
				<h5>{props.data.phonetic}</h5>

				{meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<br />
							<h4>{meaning.partOfSpeech}</h4>

							<div>
								{meaning.definitions.map(function (definition) {
									return <div>- {definition.definition}</div>;
								})}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
