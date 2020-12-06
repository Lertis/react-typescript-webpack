import React from "react";
import { IPost } from "../../entities/post";

export default class PostDetail extends React.Component<{ post: IPost }> {
	render() {
		const post = this.props.post;
		return (
			<div>
				<div>ID: {post.id}</div>
				<div>Title: {post.title}</div>
			</div>
		);
	}
}
