import React, { Component } from 'react';
import NewPostDialog from "../NewPostDialog"
import "./layout.css"

class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "TOP TRACKS",
			cursor: "",
			open: true
		}
	}

	changeNav = enter => {
		if (enter) {
			this.setState({ 
				title: "ADD NEW TRACK",
				cursor: "pointer"
			})
		} else {
			this.setState({ 
				title: "TOP TRACKS",
				cursor: ""
			})
		}
	}

	openDialog = () => this.setState({ open: true })
	closeDialog = () => this.setState({ open: false })

  render() {
  	const { title, cursor, open } = this.state
    return (
      <div
      	className="nav-container" 
      	onMouseEnter={() => this.changeNav(true)}
      	onMouseLeave={() => this.changeNav(false)}
      >
      	<p
      		style={{cursor: `${cursor}`}}
      		className="nav-text"
      		onClick={() => this.openDialog()}
      	>
      		{title}
      	</p>
      	<NewPostDialog open={open} closeDialog={this.closeDialog} />
      </div>
    );
  }
}

export default NavBar;