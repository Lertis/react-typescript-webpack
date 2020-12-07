import React from "react";
type Props = {
	message?: string;
};

export default class Spinner extends React.Component<Props> {

	protected static defaultProps: Partial<Props> = {
		message: "Loading..."
	};

	render(): JSX.Element {
		return (
			<div className="ui segment">
				<div className="ui active dimmer" style={{ height: "25vh" }}>
					<div className="ui text loader">{this.props.message}</div>
				</div>
				<p></p>
			</div>
		);
	}
}

