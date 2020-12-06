import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IPost } from "../../entities/post";
import { IPostsState } from "../../store/entities/posts.entities";
import { postsRequestAsync, TPostsReducerActions } from "../../store/actions/posts.actions";
import Spinner from "../spinner";
import PostDetail from "./post.details";

type Props = {
	posts: IPost[];
	selectedPost: IPost | null;
	isLoading: boolean;
	error: any;
	fetchRequest: () => void;
};

class PostsList extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
		this.props.fetchRequest();
	}

	renderContent(): JSX.Element {
		const error = !!this.props.error;
		if (error) {
			return <div>ERROR OCCURS: {error}</div>;
		}
		return this.props.isLoading ? <Spinner /> : this.displaySongs();
	}

	private displaySongs(): JSX.Element {
		const postsLength = this.props.posts.length;
		const allPosts = this.props.posts;
		return postsLength ? (
			<ul>
				{allPosts.map((post: IPost) => (
					<PostDetail key={post.id} post={post} />
				))}
			</ul>
		) : (
			<div>No songs yet to display :(</div>
		);
	}

	render() {
		return this.renderContent();
	}
}

const mapStateToProps = (globalState: { posts: IPostsState }): IPostsState => {
	return {
		posts: globalState.posts.posts,
		selectedPost: globalState.posts.selectedPost,
		isLoading: globalState.posts.isLoading,
		error: globalState.posts.error,
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IPostsState, any, TPostsReducerActions>) => {
	return {
		fetchRequest: () => {
			dispatch(postsRequestAsync());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
