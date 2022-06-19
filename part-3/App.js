const App = () => {
	return (
		<div>
			<Person name="Jim" age={22} hobbies={["Skiing", "Fishing"]} />
			<Person name="Sarah" age={17} hobbies={["Guitar", "Karaoke"]} />
			<Person name="Enrique" age={30} hobbies={["Cooking", "Painting"]} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
