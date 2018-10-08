import React, { Component } from 'react';
import PostForm from "./PostForm"
	
class NewPostDialog extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			title: "", 
			description: "", 
			artistName: "", 
			trackTitle: "", 
			image: ""
		}
	}

	onChange = (type, val) => this.setState({ [type]: val })

  render() {
  	const { open, closeDialog } = this.props
  	const { title, description, artistName, trackTitle, image } = this.state
  	return (
  		<div>
  		{ open ? 
	  		<div className="modal-backing">
	  			<div className="modal">
		 		    <PostForm 
				    	title={title}
				    	description={description}
				    	artistName={artistName}
				    	trackTitle={trackTitle}
				    	image={image}
				    	onChange={this.onChange}
				    />
				    <div className="buttons-container">
				    	<div className="create button">
				    		Create
				    	</div>
					    <div className="cancel button">
					    	Cancel
					    </div>
				    </div>
	  			</div>
	  		</div> : null
  		}
  		</div>
  	)
	}
}

export default NewPostDialog;
	