import { IPost } from "../../entities/post";
import posts from "../../api/posts";
import { AxiosResponse } from "axios";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IPostsState } from "../entities/posts.entities";

export enum EPostsActionTypes {
	POSTS_REQUEST = 'POSTS_REQUEST',
	POSTS_SUCCESSED_REQUEST = 'POSTS_SUCCESSED_REQUEST',
	POSTS_FAILED_REQUEST = 'POSTS_FAILED_REQUEST',
	POSTS_IS_LOADING = 'POSTS_IS_LOADING',
	POSTS_SELECT = 'POSTS_SELECT'
}

export type AppThunk = ActionCreator<ThunkAction<void, IPostsState, null, Action<string>>>;

export const postsRequestAsync: AppThunk = () => {
	return async (dispatch: Dispatch<TPostsReducerActions>): Promise<Action> => {
		const postsResponse = await posts.get("/posts");
		try {
			return dispatch({
				type: EPostsActionTypes.POSTS_SUCCESSED_REQUEST,
				payload: postsResponse.data as IPost[]
			});
		} catch (e) {
			return dispatch({
				type: EPostsActionTypes.POSTS_FAILED_REQUEST,
				payload: "Wrong Url" as any
			});
		}
	};
};


export const postsRequest = async (url: string) => {
	const postsResponse: AxiosResponse<IPost[]> | AxiosResponse = await posts.get(`${url}`);
	console.log(postsResponse);
	return {
		type: EPostsActionTypes.POSTS_REQUEST,
		payload: url
	};
};

export const songsSuccessedRequest = (postsList: IPost[]) => ({
	type: EPostsActionTypes.POSTS_SUCCESSED_REQUEST,
	payload: postsList
});

export const songsFailedRequest = (err: any) => ({
	type: EPostsActionTypes.POSTS_FAILED_REQUEST,
	payload: err
});

export const postsIsLoading = (flag: boolean) => ({
	type: EPostsActionTypes.POSTS_IS_LOADING,
	payload: flag
});

export const selectSong = () => ({
	type: 'POSTS_SELECT'
});

interface IPostBaseAction {
	type: EPostsActionTypes;
}
interface IPostsRequest extends IPostBaseAction {
	type: EPostsActionTypes.POSTS_REQUEST;
}
interface IPostsSuccessedRequest extends IPostBaseAction {
	type: EPostsActionTypes.POSTS_SUCCESSED_REQUEST;
	payload: IPost[];
}
interface IPostsFailedRequest extends IPostBaseAction {
	type: EPostsActionTypes.POSTS_FAILED_REQUEST;
	payload: any;
}
interface IPostsIsLoading extends IPostBaseAction {
	type: EPostsActionTypes.POSTS_IS_LOADING;
	payload: boolean;
}
interface IPostSelect extends IPostBaseAction {
	type: EPostsActionTypes.POSTS_SELECT;
	payload: IPost;
}

export type TPostsReducerActions = IPostsRequest | IPostsSuccessedRequest | IPostsFailedRequest | IPostsIsLoading | IPostSelect;
