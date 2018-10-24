import React from "react";
import TextField from "@material-ui/core/TextField";

const TextBox = ({ label, type, val, onChange }) => (
	<TextField
		label={label}
		val={val}
		onChange={evt => onChange(type, evt.target.value)}
	/>
);

export default TextBox;
