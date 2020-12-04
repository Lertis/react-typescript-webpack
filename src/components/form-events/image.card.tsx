import React from "react";
import { IImage } from "./../../entities/image";

export default class ImageList extends React.Component<{ image: IImage }, { spans: number }> {
	imageRef: React.RefObject<HTMLImageElement>;
	constructor(props: { image: IImage }) {
		super(props);
		this.state = { spans: 0 }
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current?.addEventListener("load", this.setSpans.bind(this));
	}

	setSpans() {
		const height: number | undefined = this.imageRef.current?.clientHeight;
		const spans = Math.ceil((height || 0) / 150);
		this.setState({ spans })
	}

	render() {
		const { description, urls } = this.props.image;
		return (
			<div style={{ gridRowEnd: `${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		)
	}
}
