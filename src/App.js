import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

import "./styles/App.css";

function App() {
	const location = useLocation();

	return (
		<Switch location={location} key={location.key}>
			<Route path="/" component={Home} exact />
			<Route path="/about" component={About} />
		</Switch>
	);
}

export default App;
