import React from "react";
import TextBox from "./TextBox";
import "./newpost.css";

const PostForm = ({
	title,
	description,
	artistName,
	trackTitle,
	image,
	onChange
}) => (
	<div className="flex-col post-form">
		<TextBox label="Post" type="title" val={title} onChange={onChange} />
		<TextBox
			label="Description"
			type="description"
			val={description}
			onChange={onChange}
		/>
		<TextBox
			label="Artist Name"
			type="artistName"
			val={artistName}
			onChange={onChange}
		/>
		<TextBox
			label="Track Title"
			type="trackTitle"
			val={trackTitle}
			onChange={onChange}
		/>
		<TextBox label="Image Link" type="image" val={image} onChange={onChange} />
	</div>
);

export default PostForm;
