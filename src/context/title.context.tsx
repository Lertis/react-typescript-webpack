import React, { Fragment } from "react";

const TitleContext = React.createContext<{ title: string, titleClick: () => void }>({ title: "", titleClick: () => "" });

const LevelThree = () => (
	<TitleContext.Consumer>
		{(props: { title: string, titleClick: () => void }) => (
			<Fragment>
				<h1 onClick={props.titleClick}>{props.title}</h1>
			</Fragment>
		)}
	</TitleContext.Consumer>
);

const LevelTwo = () => <LevelThree />;

const LevelOne = () => <LevelTwo />;

export default class Lesson extends React.Component {
	render() {
		return (
			<TitleContext.Provider value={{ title: "Simple Title", titleClick: () => console.log(`Title has been clicked!`) }}>
				<LevelOne />
			</TitleContext.Provider>
		);
	}
}
