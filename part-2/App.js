const App = () => {
	return (
		<div>
			<Tweet
				username="fromUser1"
				name="Allan"
				date="06/15/22"
				message="Getting some coffee."
			/>
			<Tweet
				username="fromUser2"
				name="Samantha"
				date="06/16/22"
				message="Drinking some coffee."
			/>
			<Tweet
				username="fromUser1"
				name="Ed"
				date="06/17/22"
				message="Checking in @Cafe."
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
