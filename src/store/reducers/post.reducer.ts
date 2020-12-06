import { EPostsActionTypes, TPostsReducerActions } from "../actions/posts.actions";
import { initialState, IPostsState } from "../entities/posts.entities";

const postsReducer = (
	state: IPostsState = initialState,
	action: TPostsReducerActions
): IPostsState => {
	if (action && action.type) {
		switch (action.type) {
			case EPostsActionTypes.POSTS_REQUEST:
				return { ...state, isLoading: true };
			case EPostsActionTypes.POSTS_SUCCESSED_REQUEST:
				return { ...state, posts: action.payload, isLoading: false };
			case EPostsActionTypes.POSTS_FAILED_REQUEST:
				return { ...state, posts: [], isLoading: false, error: action.payload };
			case EPostsActionTypes.POSTS_IS_LOADING:
				return { ...state, isLoading: action.payload };
			case EPostsActionTypes.POSTS_SELECT:
				return { ...state, selectedPost: action.payload };
			default:
				return state;
		}
	} else {
		return initialState;
	}
}

export default postsReducer;
