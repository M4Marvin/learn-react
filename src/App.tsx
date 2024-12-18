// import { useState } from "react";

import "./App.css";

function App() {
	const todos = ["Wake up ", "Eat food"];
	const list = todos.map((todo) => <li>{todo}</li>);
	function handleSubmit(){
		// Check if the user pressed Enter
		// Take the input in a variable
		// Push the input into the list
		// Empty the input text
		// Show the list
	};

	return (
		<div>
			<input type="text" onKeyDown={handleSubmit}/>
			<ul>{list}</ul>
		</div>
	);
}

export default App;
