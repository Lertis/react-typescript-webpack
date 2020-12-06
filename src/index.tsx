import React, { Suspense } from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/reducers/index";
import reportWebVitals from "./reportWebVitals";
import PostsList from "./components/posts/posts.list";

const store = createStore(rootReducer, applyMiddleware(thunk));
const LazyLoadedRootComponent = React.lazy(() => import("./components/person.list"));

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<LazyLoadedRootComponent />
		</Suspense>
		<Provider store={store}>
			<PostsList />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
