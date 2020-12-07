import React, { Suspense } from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { HashRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducers/index";
import Spinner from "./components/spinner";
import reportWebVitals from "./reportWebVitals";


const store = createStore(rootReducer, compose(applyMiddleware(thunk), composeWithDevTools()));
const RouterWrapper = React.lazy(() => import("./components/navigation/nav.tabs"));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Suspense fallback={<div><Spinner /></div>}>
					<RouterWrapper />
				</Suspense>
			</Router>
		</Provider>
	</React.StrictMode >,
	document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
