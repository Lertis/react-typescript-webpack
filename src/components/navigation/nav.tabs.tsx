import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import AgGridWrapper from "../ag-grid/ag-grid.wrapper";
import ApprovalWrapper from "../approval/approval.wrapper";
import PictureSearchWrapper from "../form-events/pictures.search.wrapper";
import PersonList from "../persons/person.list";
import postsList from "../posts/posts.list";
import RxjsExamples from "../rxjs-examples/rxjs.examples";
import SeasonWrapper from "../seasons/season.wrapper";

export const Home = () => <h1>Here will be added info a bit later...</h1>;

export default class NavTabs extends React.Component {
	private readonly navMenuList = [
		{ link: "/", exact: true, name: "Home", component: Home },
		{ link: "/posts", exact: false, name: "Posts", component: postsList },
		{ link: "/persons", exact: false, name: "Persons", component: PersonList },
		{ link: "/rxjs", exact: false, name: "Rxjs", component: RxjsExamples },
		{ link: "/picture-search", exact: false, name: "Picture Search", component: PictureSearchWrapper },
		{ link: "/approval", exact: false, name: "Approval Card", component: ApprovalWrapper },
		{ link: "/seasons", exact: false, name: "Seasons", component: SeasonWrapper },
		{ link: "/ag-grid", exact: false, name: "ag-Grid", component: AgGridWrapper }
	];

	renderNavLinks(): JSX.Element[] {
		const navLinks = this.navMenuList;
		return navLinks.map((el, i) => {
			return <div key={i + 1} className="item"><NavLink exact={el.exact} activeStyle={{ color: '#9505a7' }} to={el.link}>{el.name}</NavLink></div>;
		});
	}

	renderRoutes(): JSX.Element[] {
		const routesList = this.navMenuList;
		return routesList.map((el, j) => {
			return <Route key={j + 1} exact={el.exact} path={el.link} component={el.component} />;
		});
	}

	render(): JSX.Element {
		return (
			<React.Fragment>
				<nav>
					<div className="ui menu tabs-list" style={{ overflow: "auto" }}>
						{this.renderNavLinks()}
					</div>
				</nav>
				<Switch>
					{this.renderRoutes()}
				</Switch>
			</React.Fragment>
		)
	}
}
