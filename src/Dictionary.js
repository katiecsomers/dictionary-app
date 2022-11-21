import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
	const [searchedWord, setSearchedWord] = useState();

	function updateWord(event) {
		console.log(event);
		setSearchedWord(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(searchedWord);
	}

	return (
		<div className="Dictionary">
			<form
				className="input-group mb-3"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					className="form-control"
					placeholder="What word do you want to search?"
					onChange={updateWord}
				/>
				<button
					className="btn btn-outline-secondary"
					type="button"
				>
					Search
				</button>
			</form>
		</div>
	);
}
