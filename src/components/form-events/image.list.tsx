import React from "react";
import "./image.list.css";
import ImageCard from "./image.card";
import { IImage } from "../../entities/image";

export default class ImageList extends React.Component<{ images: IImage[] }> {
	render() {
		const images = this.props.images.map(image => {
			return <ImageCard key={image.id} image={image} />;
		});

		return <div /* className="image-list" */>{images}</div>;
	}
}
