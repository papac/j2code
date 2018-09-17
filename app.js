import React from "react"
import ReactDOM from "react-dom"

const J2Code = ({ message }) => {
	return (
		<div>
			{message}
		</div>
	)
};

ReactDOM.render(
	<J2Code message="Maintenant, codons !",
	document.getElementById('root')
);
