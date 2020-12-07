import React from "react";
import ApprovalCard from "../approval/approval.card"
import Comment from "../approval/comment";

export default class ApprovalWrapper extends React.Component {
	render() {
		return (
			<div className="ui containers comments">
				<ApprovalCard>
					<Comment author="Sam" timeAgo={new Date(2020, 1, 1, 14, 15, 0).toLocaleString()} content="Really cool!" />
				</ApprovalCard>
				<ApprovalCard>
					<Comment author="Molly" timeAgo={new Date(2020, 3, 5, 6, 1, 8).toLocaleString()} content="I like it." />
				</ApprovalCard>
			</div>
		)
	}
}
