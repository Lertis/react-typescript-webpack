import React from "react";
import { IImage } from "../../entities/image";
import unsplash from "../../api/unsplash";
import SearchBar from "./search.bar";
import ImageList from "./image.list";

export default class PictureSearchWrapper extends React.Component<{}, { images: IImage[] }> {
	state = {
		images: [],
	};

	onSearchSubmit(term: string) {
		unsplash
			.get(`/search/photos`, {
				params: { query: term },
			})
			.then((result) => {
				const images: IImage[] = result.data.results;
				this.setState({ images });
			});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSumbitHandler={(e: string) => this.onSearchSubmit(e)} />
				Found : {this.state.images.length} images
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
