import React from "react";
import "./season.display.css";

const seasonConfig = {
	summer: {
		text: "Let hit the beach!",
		iconName: "sun"
	},
	winter: {
		text: "Buur, it is chilly!",
		iconName: "snowflake"
	}
};

const getSeason = (lat: number, month: number): "summer" | "winter" => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = (props: { lat: number }): JSX.Element => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { iconName, text } = seasonConfig[season];

	return (
		<React.Fragment>
			<div className={`season-display ${season}`}>
				<i className={`icon-left massive ${iconName} icon`}></i>
				<h1>{text}</h1>
				<i className={`icon-right massive ${iconName} icon`}></i>
			</div>
			<div>Latitide: {props.lat}</div>
		</React.Fragment>
	)
}

export default SeasonDisplay;
