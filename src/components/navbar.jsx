import React, { Component } from 'react';

class NavBar extends Component {
	render() { 
		return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="google.com">
					Navbar
					<span className="badge badge-pill badge-secondry">
						{this.props.totalCounters}
					</span>
				</a>
			</nav>
		);
	}
}
 
export default NavBar;