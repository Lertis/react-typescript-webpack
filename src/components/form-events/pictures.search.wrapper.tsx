import React from "react";
import SearchBar from "./search.bar";

export default class PictureSearchWrapper extends React.Component {
	onSearchSubmit(term: string) {
		console.log(term);
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSumbitHandler={(e: string) => this.onSearchSubmit(e)}/>
			</div>
		)
	}
}
