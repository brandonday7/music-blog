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
      <div className="post-container">
      	<div className="post-details">
	      	<div className="post-header">
	        	<p className="track-title">{trackTitle}</p>
	        	<p>{artistName}</p>
	      	</div>
	      	<div>
	        	<p className="post-title">{postTitle}</p>
	        	<p className="post-description">{description}</p>
	      	</div>
        </div>
        <div className="image-container">
        	<img src={imgSrc} alt="Image Unavailable"/>
        </div>
      </div>
    );
  }
}

export default Post;
