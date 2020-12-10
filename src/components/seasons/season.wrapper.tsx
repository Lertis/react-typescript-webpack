import React, { ReactNode } from "react";
import Spinner from "../spinner";
import SeasonDisplay from "./season.display";

type StateProps = {
	isLoading: boolean,
	lat: number;
	long: number;
	errorMessage: string
};

export default class SeasonWrapper extends React.Component<{}, StateProps> {
	state: StateProps = {
		isLoading: true,
		lat: 0,
		long: 0,
		errorMessage: "",
	};

	componentDidMount(): void {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude });
				this.loadingEnded(true);
			},
			(err) => {
				this.setState({ errorMessage: err.message });
				this.loadingEnded(true);
			}
		);
	}

	private readonly anyErrorAboutGeolocationOccurs = (): boolean => !!this.state.errorMessage;
	private readonly loadingEnded = (ended: boolean): void => this.setState({ isLoading: !ended });

	renderContent(): ReactNode {
		if (this.state.isLoading) {
			return <Spinner />
		} else {
			if (this.anyErrorAboutGeolocationOccurs()) {
				return <div>Error: {this.state.errorMessage}</div>;
			}
			if (!this.anyErrorAboutGeolocationOccurs()) {
				return <SeasonDisplay lat={this.state.lat} />;
			}
		}
	}

	render(): JSX.Element {
		return <div className="border red">{this.renderContent()}</div>;
	}
}
