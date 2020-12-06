import React from "react";
type Props = {
	searchMessage?: string;
	onSumbitHandler: (term: string) => void;
};

export default class SearchBar extends React.Component<Props, { term: string }> {
	state = {
		term: "",
	};

	protected static defaultProps: Partial<Props> = {
		searchMessage: "Search Picture...",
	};

	onFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		this.props.onSumbitHandler(this.state.term);
	}

	render(): JSX.Element {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
					<div className="field">
						<label>{this.props.searchMessage}</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}></input>
					</div>
				</form>
			</div>
		);
	}
}
