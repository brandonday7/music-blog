import React, { Component } from "react";
import DeletePost from "../../Mutations/DeletePost";

class Post extends Component {
	render() {
		const {
			id,
			postTitle,
			description,
			imgSrc,
			trackTitle,
			artistName,
			refetch
		} = this.props;

		return (
			<div className="post-container">
				<div className="post-details">
					<div className="post-header">
						<p className="track-title">{trackTitle}</p>
						<p className="artist-name">{artistName}</p>
					</div>
					<div>
						<p className="post-title">{postTitle}</p>
						<p className="post-description">{description}</p>
					</div>
				</div>
				<div className="image-container">
					<DeletePost id={Number(id)} refetch={refetch} />
					<img className="album-art" src={imgSrc} alt="Unavailable" />
				</div>
			</div>
		);
	}
}

export default Post;
