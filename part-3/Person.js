const Person = ({ name, age, hobbies }) => {
	return (
		<div>
			<h1>Name: {name.slice(0, 6)}</h1>
			<p>Learn more about this person.</p>
			<h3>{age > 18 ? "please go vote" : "you must be 18"}</h3>
			<ul>
				{hobbies.map((hobby) => (
					<li>{hobby}</li>
				))}
			</ul>
		</div>
	);
};
