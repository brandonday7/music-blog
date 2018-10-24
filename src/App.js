import React, { Component } from "react";

import GetPosts from "./Queries/GetPosts";
import NavBar from "./components/Layout/NavBar";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	openDialog = () => this.setState({ open: true });
	closeDialog = () => this.setState({ open: false });

	render() {
		return (
			<div className="app-container">
				<NavBar openDialog={this.openDialog} />
				<GetPosts open={this.state.open} closeDialog={this.closeDialog} />
			</div>
		);
	}
}

export default App;
