import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

import { createStore } from "redux"; // 1
import { Provider } from "react-redux"; // 2

import reducer from "./store/reducer"; //3

const store = createStore(reducer); // 4 reducer is a func () => {}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
