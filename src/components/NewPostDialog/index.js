import React, { Component } from "react";
import PostForm from "./PostForm";
import CreatePost from "../../Mutations/CreatePost";

const initialState = {
	title: "",
	description: "",
	artistName: "",
	trackTitle: "",
	image: ""
};

class NewPostDialog extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	onChange = (type, val) => this.setState({ [type]: val });

	render() {
		const { open, closeDialog, refetch } = this.props;
		const { title, description, artistName, trackTitle, image } = this.state;
		return (
			<div>
				{open ? (
					<div className="modal-backing">
						<div className="modal">
							<h3 className="header">Post new track</h3>
							<PostForm
								title={title}
								description={description}
								artistName={artistName}
								trackTitle={trackTitle}
								image={image}
								onChange={this.onChange}
							/>
							<div className="buttons-container">
								<div className="cancel button" onClick={closeDialog}>
									Cancel
								</div>
								<CreatePost
									newPostParams={{ params: this.state }}
									closeDialog={closeDialog}
									refetch={refetch}
								/>
							</div>
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

export default NewPostDialog;
