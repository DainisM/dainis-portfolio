import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";

import "./styles/App.css";

import messages from "./messages";

import { IntlProvider } from "react-intl";
import { flattenMessages } from "./components/helpers/FlattenMessages";

import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/da";

//Get the locale language for user
let locale = (navigator.languages && navigator.languages[0]) ||
	navigator.language ||
	navigator.userLanguage || ["en-US", "en"];

function App() {
	const location = useLocation();
	//Language state - get from localStorage or locale (if no localStorage)
	const [language, setLanguage] = useState(
		localStorage.getItem("language") || locale
	);
	//Method to set/update language to localStorage
	const setLangStorage = (lang) => {
		localStorage.setItem("language", lang);
	};

	return (
		<IntlProvider
			locale={locale}
			messages={flattenMessages(messages[language])}
		>
			<>
				<Header
					language={language}
					setLanguage={setLanguage}
					setLangStorage={setLangStorage}
				/>
				<Switch location={location} key={location.key}>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/work" component={Work} />
				</Switch>
			</>
		</IntlProvider>
	);
}

export default App;
