import React, { ReactNode } from "react";
import Spinner from "../spinner";
import SeasonDisplay from "./season.display";

export default class SeasonWrapper extends React.Component<any, { lat: number, long: number, errorMessage: string }> {
	state = {
		lat: 0,
		long: 0,
		errorMessage: ""
	};

	componentDidMount(): void {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		)
	}

	private readonly anyErrorAboutGeolocationOccurs = (): boolean => !!this.state.errorMessage;

	renderContent(): ReactNode {
		if (this.anyErrorAboutGeolocationOccurs()) {
			return <div>Error: {this.state.errorMessage}</div>
		}
		if (!this.anyErrorAboutGeolocationOccurs()) {
			return <SeasonDisplay lat={this.state.lat} />
		}
		return <Spinner />;
	}

	render(): JSX.Element {
		return <div className="border red">{this.renderContent()}</div>
	}
}
