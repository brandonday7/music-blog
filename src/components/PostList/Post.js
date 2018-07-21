import React, { Component } from 'react';

class Post extends Component {
  render() {
		const { 
			postTitle, 
			description, 
			imgSrc, 
			trackTitle, 
			artistName
		} = this.props

    return (
      <div>
        <p>{postTitle}</p>
        <p>{description}</p>
        <p>{imgSrc}</p>
        <p>{trackTitle}</p>
        <p>{artistName}</p>
      </div>
    );
  }
}

export default Post;
