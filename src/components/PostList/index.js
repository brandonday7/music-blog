import React, { Component } from "react";
import Post from "./Post";
import "./post-list.css";

class PostList extends Component {
	render() {
		const { posts, refetch } = this.props;
		return (
			<div>
				{posts.map((post, index) => {
					return (
						<Post
							key={index}
							id={post.id}
							postTitle={post.title}
							description={post.description}
							imgSrc={post.image}
							trackTitle={post.track.title}
							artistName={post.artist.name}
							refetch={refetch}
						/>
					);
				})}
			</div>
		);
	}
}

export default PostList;
