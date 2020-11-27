import React from "react";
import { NO_INFO_USER_INFO, IUser } from "../entities/user";
import { cloneDeep } from "lodash";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Phone } from "@material-ui/icons";

export interface IUserDetailsState {
	user: IUser | undefined;
	nothingToShow: boolean
}

export default class PersonDetail extends React.Component<{ detail: IUser | undefined, nothingToShow: boolean }, IUserDetailsState> {
	constructor(props: { detail: IUser, nothingToShow: boolean }) {
		super(props);
		const userDetails: IUserDetailsState = { user: cloneDeep(NO_INFO_USER_INFO), nothingToShow: false };
		this.state = cloneDeep(userDetails);
	}

	componentDidUpdate(nextProps: { detail: IUser | undefined, nothingToShow: boolean }) {
		const newProps: { detail: IUser | undefined, nothingToShow: boolean } = this.props;
		if (nextProps.detail !== newProps.detail && newProps) {
				this.setState({ user: newProps.detail, nothingToShow: newProps.nothingToShow })
		}
	}

	static getDerivedStateFromProps(nextProps: { detail: IUser, nothingToShow: boolean }, prevState: IUserDetailsState) {
		return { newUserInfo: nextProps.detail };
	}

	anyUserToBeShown(): boolean {
		return !!this.state.nothingToShow;
	}

	anyUserDetails(): JSX.Element {
		return !!this.props.detail ? <Card>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					User e-mail : {this.state.user?.email}
				</Typography>
				<Typography variant="h5" component="h2">
					User name: {this.state.user?.name}
				</Typography>
				<Typography color="textSecondary">
					Company: {this.state.user?.company.name}
				</Typography>
				<Typography className="flex-stretch" variant="body2" component="p">
					<Phone /> {this.state.user?.phone}
				</Typography>
			</CardContent>
		</Card>
			: <div>Please select any user!</div>;
	}

	render() {
		return (
			<div>
				{this.anyUserToBeShown() ? <div>{this.anyUserDetails()}</div>
					: <div>No users to be displayed!</div>}
			</div>);
	}
}
