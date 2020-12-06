import React from "react";
import axios from "axios";

export default class Comment extends React.Component<
	{
		author: string;
		timeAgo: string;
		content: string;
	},
	{ avatar: string }
> {
	private readonly FAKE_AVATARS_URL = `https://randomuser.me/api/?results=1`;
	constructor(props: { author: string; timeAgo: string; content: string }) {
		super(props);
		this.state = { avatar: "" };
	}

	componentDidMount() {
		axios.get(this.FAKE_AVATARS_URL).then((res) => {
			const avatar = res.data.results[0].picture.thumbnail;
			this.setState({ avatar });
		});
	}

	render() {
		return (
			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={this.state.avatar} />
				</a>
				<div className="content">
					<a href="/" className="author">
						{this.props.author}
					</a>
					<div className="metadata">
						<span className="date">{this.props.timeAgo}</span>
					</div>
					<div className="text">{this.props.content}</div>
				</div>
			</div>
		);
	}
}
