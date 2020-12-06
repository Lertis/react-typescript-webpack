import { combineReducers } from "redux";
import postsReducer from "./post.reducer";

export const rootReducer = combineReducers({
	posts: postsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
