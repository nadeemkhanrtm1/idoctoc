import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
            console.log(prevProps);
		}
	}

	render() {
		return <React.Fragment />
	}
}

export default withRouter(ScrollToTop);