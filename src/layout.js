import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./js/store/app-context";
import Home from "./js/views/home";

const Layout = () => {
	return (
		<div className="">
			<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
