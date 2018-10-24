import React, { Component } from "react";

import "./layout.css";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "TOP TRACKS",
			cursor: ""
		};
	}

	changeNav = enter => {
		if (enter) {
			this.setState({
				title: "ADD NEW TRACK",
				cursor: "pointer"
			});
		} else {
			this.setState({
				title: "TOP TRACKS",
				cursor: ""
			});
		}
	};

	render() {
		const { title, cursor } = this.state;
		const { openDialog } = this.props;
		return (
			<div
				className="nav-container"
				onMouseEnter={() => this.changeNav(true)}
				onMouseLeave={() => this.changeNav(false)}
			>
				<p
					style={{ cursor: `${cursor}` }}
					className="nav-text"
					onClick={() => openDialog()}
				>
					{title}
				</p>
			</div>
		);
	}
}

export default NavBar;
