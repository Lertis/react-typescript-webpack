import React from 'react';
import axios from 'axios';
import { IUser } from "../entities/user";
import { Button, ListItemText, ListItem, List } from "@material-ui/core";
import { cloneDeep } from "lodash";

export interface IUserListState {
	users: IUser[];
	selectedId: number;
	error: any;
}

export default class PersonList extends React.Component<any, IUserListState> {

	private readonly BASE_URL = `https://jsonplaceholder.typicode.com`;

	constructor(props: any) {
		super(props);
		const usersState: IUserListState = { users: [], selectedId: 0, error: {} };
		this.state = cloneDeep(usersState);
	}

	componentDidMount(): void {
		axios.get(`${this.BASE_URL}/users`)
			.then((res) => {
				const users: IUser[] = res.data;
				this.setState({ users })
			})
			.catch((err) => {
				this.setState({ error: err });
			})
	}

	buttonPlusHandler = (selectedId: number) => {
		this.setState({ selectedId });
	}

	shouldTheSelectButtonBeDisabled(id: number) {
		return this.state.selectedId === id;
	}

	render() {
		return (
			<div>
				<List component="nav" aria-label="main mailbox folders">
					{this.state.users.map((user: IUser) =>
						<div key={user.id}>
							<ListItem>
								<div className="flexPosition">
								<Button
									variant="contained"
									color="primary"
									disabled={this.shouldTheSelectButtonBeDisabled(user.id)}
									onClick={this.buttonPlusHandler.bind(this, user.id)}>Select</Button>
								<ListItemText primary={user.name} />
								</div>
							</ListItem>
						</div>)}
				</List>
			</div>
		)
	}
}
