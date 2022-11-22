import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
	return (
		<div>
			<br />
			{props.data.map(function (synonym, index) {
				return (
					<div
						className="Synonyms"
						key={index}
					>
						{synonym},
					</div>
				);
			})}
		</div>
	);
}
