import React, { Component } from 'react';
import Post from "./Post"
import "./post-list.css"

class PostList extends Component {
  render() {
		const { posts } = this.props
    return (
      <div>
				{posts.map((post, index) => {
					return (
						<Post 
							key={index}
							postTitle={post.title}
							description={post.description}
							imgSrc={post.image}
							trackTitle={post.track.title}
							artistName={post.artist.name}
						/>
					)
				})}      
      </div>
    );
  }
}

export default PostList;
