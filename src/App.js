import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<header>
				<h1>Dictionary</h1>
			</header>
			<main>
				<Dictionary />
			</main>
			<footer>
				This project was coded by{" "}
				<a
					href="https://legendary-squirrel-36425c.netlify.app/"
					target={"_blank"}
					rel={"noreferrer"}
				>
					Katie C Somers
				</a>{" "}
				and is{" "}
				<a
					href="https://github.com/katiecsomers/shecodes-react-weather-app"
					target={"_blank"}
					rel={"noreferrer"}
				>
					open source.
				</a>
			</footer>
		</div>
	);
}

export default App;
