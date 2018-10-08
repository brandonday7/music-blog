import React from 'react';
import TextBox from "./TextBox"
import "./newpost.css"

const PostForm = ({ title, description, artistName, trackTitle, image, onChange }) => (
	<div className="flex-col post-form">
		<TextBox label="Post" val={title} onChange={onChange} />
		<TextBox label="Description" val={description} onChange={onChange} />
		<TextBox label="Artist Name" val={artistName} onChange={onChange} />
		<TextBox label="Track Title" val={trackTitle} onChange={onChange} />
		<TextBox label="Image Link" val={image} onChange={onChange} />
	</div>
)

export default PostForm;
	