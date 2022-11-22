import React, { useState } from "react";
import axios from "axios";
import WordDisplay from "./WordDisplay.js";
import PhotoDisplay from "./PhotoDisplay.js";
import "./Dictionary.css";

export default function Dictionary() {
	const [searchedWord, setSearchedWord] = useState(null);
	const [wordData, setWordData] = useState(null);
	const [photoData, setPhotoData] = useState(null);

	function updateWord(event) {
		setSearchedWord(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		let dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
		let photoUrlKey = "n1zEL9Tsb3NjDP0LPWtXzwIofF_4_5rIS6NcpsJRBvI";
		let photoUrl = `https://api.unsplash.com/search/photos?page=1?&query=${searchedWord}&client_id=${photoUrlKey}`;

		axios
			.get(dictionaryUrl)
			.then(function (response) {
				setWordData(response.data[0]);
			})
			.catch(function (error) {
				console.error(error);
			});

		axios
			.get(photoUrl)
			.then(function (response) {
				setPhotoData(response.data.results);
			})
			.catch(function (error) {
				console.error(error);
			});
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
			<WordDisplay data={wordData} />
			<PhotoDisplay data={photoData} />
		</div>
	);
}
