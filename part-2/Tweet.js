const Tweet = ({ username, name, date, message }) => (
	<div>
		<p>
			@{username} {name} {date}
		</p>
		<p>{message}</p>
	</div>
);
