import React from "react";


export default class ApprovalCard extends React.Component {
	render() {
		return (
			<div className="ui card">
				<div className="content">{React.Children.map(this.props.children, Child => {
					return <React.Fragment>{Child}</React.Fragment>
				})}</div>
				<div className="extra content">
					<div className="ui two buttons">
						<div className="ui basic green button">Approve</div>
						<div className="ui basic red button">Reject</div>
					</div>
				</div>
			</div>
		);
	}
}
