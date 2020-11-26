import React from "react";

const LevelThree = ({ title }: { title: string }) => <div><h1>{title}</h1></div>;

const LevelTwo = ({ title }: { title: string }) => <LevelThree title={title} />;

const LevelOne = ({ title }: { title: string }) => <LevelTwo title={title} />;

export default class Lesson extends React.Component {
	render() {
		return (
			<LevelOne title="simple test" />
		);
	}
}
