import React from 'react';
import axios from 'axios';
import { Button, ListItemText, ListItem, List } from "@material-ui/core";
import { IUser } from "../entities/user";
import PersonDetail from "./person.info";
import { cloneDeep } from "lodash";
import "./../App.css"

export interface IUserListState {
	users: IUser[];
	filteredUsers: IUser[];
	searchTerm: string;
	selectedId: number;
	error: any;
}

export default class PersonList extends React.Component<any, IUserListState> {

	private readonly BASE_URL = `https://jsonplaceholder.typicode.com`;

	constructor(props: any) {
		super(props);
		const usersState: IUserListState = {
			users: [],
			filteredUsers: [],
			searchTerm: "",
			selectedId: 0,
			error: {}
		};
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

	getSelectedUserDetails() {
		return this.state.users.find((user: IUser) => user.id === this.state.selectedId);
	}

	filterUsers(event: React.ChangeEvent<HTMLInputElement>) {
		const searchTerm = event.target.value;
		if (searchTerm === "") {
			this.setState({ selectedId: 0 });
		}
		this.setState({ searchTerm: event.target.value });
	}

	whatShouldBeDisplayed(): IUser[] {
		const searchTerm = this.state.searchTerm;
		const allUsers = this.state.users;
		if (searchTerm === "") {
			return allUsers;
		} else {
			const filteredUsers = this.state.users.filter((user: IUser) => user.name.includes(searchTerm));
			if (filteredUsers.length !== 0) {
				return filteredUsers;
			} else {
				return [];
			}
		}

	}

	render() {
		return (
			<div>
				<div>
					<input type="text" placeholder="Enter item to be searched" onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.filterUsers(e)} />
				</div>
				<div className="flex-space-around">
					<div>
						<List component="nav" aria-label="main mailbox folders">
							{this.whatShouldBeDisplayed().map((user: IUser) =>
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
						</List></div>
					<div>
						<PersonDetail detail={this.getSelectedUserDetails()} nothingToShow={!!this.whatShouldBeDisplayed().length} />
					</div>
				</div>
			</div>
		)
	}
}
