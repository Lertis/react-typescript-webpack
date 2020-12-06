import {  IPost } from "../../entities/post";

export interface IPostsState {
	posts: IPost[];
	selectedPost: IPost | null;
	isLoading: boolean;
	error: any;
}

export const initialState: IPostsState = {
	posts: [],
	selectedPost: null,
	isLoading: true,
	error: null
};
