import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import ApprovalWrapper from "../approval/approval.wrapper";
import PictureSearchWrapper from "../form-events/pictures.search.wrapper";
import PersonList from "../persons/person.list";
import postsList from "../posts/posts.list";
import RxjsExamples from "../rxjs-examples/rxjs.examples";
import SeasonWrapper from "../seasons/season.wrapper";

export const Home = () => <h1>Here will be added info a bit later...</h1>;

export default class NavTabs extends React.Component {
	render() {
		return (
			<React.Fragment>
				<nav>
					<div className="ui menu">
						<div className="item"><NavLink exact activeStyle={{ color: '#9505a7' }} to="/">Home</NavLink></div>
						<div className="item"><NavLink activeStyle={{ color: '#9505a7' }} to="/posts">Posts</NavLink></div>
						<div className="item"><NavLink activeStyle={{ color: '#9505a7' }} to="/persons">Persons</NavLink></div>
						<div className="item"><NavLink activeStyle={{ color: '#9505a7' }} to="/rxjs">Rxjs</NavLink></div>
						<div className="item"><NavLink activeStyle={{ color: '#9505a7' }} to="/picture-search">Picture Search</NavLink></div>
						<div className="item"><NavLink activeStyle={{ color: '#9505a7' }} to="/approval">Approval Card</NavLink></div>
						<div className="item"><NavLink activeStyle={{ color: '#9505a7' }} to="/seasons">Seasons</NavLink></div>
					</div>
				</nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/posts" component={postsList} />
					<Route path="/persons" component={PersonList} />
					<Route path="/rxjs" component={RxjsExamples} />
					<Route path="/picture-search" component={PictureSearchWrapper} />
					<Route path="/approval" component={ApprovalWrapper} />
					<Route path="/seasons" component={SeasonWrapper} />
				</Switch>
			</React.Fragment>
		)
	}
}
