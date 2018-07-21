import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';

class NewPostDialog extends Component {
  render() {
  	const { open, closeDialog } = this.props
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
		    <p>
		      Welcome to add a track
		    </p>
		  </Dialog>
  	)
	}
}

export default NewPostDialog;
	