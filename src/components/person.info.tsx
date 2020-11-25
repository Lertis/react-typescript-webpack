import React from "react";
import { NO_INFO_USER_INFO, IUser } from "../entities/user";
import { cloneDeep } from "lodash";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Phone } from "@material-ui/icons";

export interface IUserDetailsState {
	user: IUser | undefined;
}

export default class PersonDetail extends React.Component<{ detail: IUser | undefined }, IUserDetailsState> {
	constructor(props: { detail: IUser }) {
		super(props);
		const userDetails: IUserDetailsState = { user: cloneDeep(NO_INFO_USER_INFO) };
		this.state = cloneDeep(userDetails);
	}

	componentWillReceiveProps(nextProps: { detail: IUser }) {
		this.setState({ user: nextProps.detail });
	}

	render() {
		return (<div>
			{!!this.props.detail
				? <div>
					<Card>
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
					</Card></div>
				: <div>Please select any user!</div>}
		</div>);
	}
}
