import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextBox = ({ label, val, onChange }) => (
		<TextField 
			label={label}
			val={val}
			onChange={onChange}
		/>
)

export default TextBox;
	