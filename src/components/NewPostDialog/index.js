import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
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
		  <Dialog
		    actions={
		      <div>
		        <button
		          type="button"
		          className="alert-button"
		          onClick={closeDialog}
		          >
		          CANCEL
		        </button>
		      </div>
		    }
		    open={open}
		    >
		    <PostForm 
		    	title={title}
		    	description={description}
		    	artistName={artistName}
		    	trackTitle={trackTitle}
		    	image={image}
		    	onChange={this.onChange}
		    />
		  </Dialog>
  	)
	}
}

export default NewPostDialog;
	