import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./js/store/app-context";
import App from "./js/views/app";

const Layout = () => {
	return (
		<div className="">
			<BrowserRouter>
					<Switch>
						<Route path="/" component={App} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
