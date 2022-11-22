import React from "react";
import Phonetics from "./Phonetics";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
	if (props.data) {
		let meanings = props.data.meanings;

		return (
			<div className="Meanings">
				{meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<br />
							<h4>{meaning.partOfSpeech}</h4>

							<div className="definitions">
								{meaning.definitions.map(function (definition, index) {
									return <div key={index}> &gt; {definition.definition}</div>;
								})}
							</div>
							<div>
								<Synonyms data={meaning.synonyms} />
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
