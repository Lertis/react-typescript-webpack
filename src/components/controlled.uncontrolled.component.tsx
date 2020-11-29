import React from "react";

export default class NameForm extends React.Component<{}, { value: string }> {
	state = { value: "" };
	ref: React.RefObject<HTMLInputElement> = React.createRef();

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ value: event.target.value });
	};

	handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
		alert("A name was submitted: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<React.Fragment>
				{/* CONTROLLED component type */}
				<form onSubmit={this.handleSubmit}>
					<input type="submit" value={this.state.value} onChange={this.handleChange} />
				</form>
				{/* UNCONTROLLED component type */}
				<form onSubmit={this.handleSubmit}>
					<input type="submit" value={this.state.value} ref={this.ref} />
				</form>
			</React.Fragment>
		);
	}
}
