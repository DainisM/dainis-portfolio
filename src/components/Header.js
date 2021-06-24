import React from "react";
import { Link } from "react-router-dom";

import { FormattedMessage, injectIntl } from "react-intl";

import Language from "./Language";
import Darkmode from "./Darkmode";

import "../styles/Header.css";

const Header = ({ language, setLanguage, setLangStorage }) => {
	return (
		<header className="row-fluid">
			<span id="homeLink">
				<Link to="/">
					<h3>Dainis Moisejenko</h3>
				</Link>
				<h5>
					<FormattedMessage id="Header.subTitle" />
				</h5>

				<span id="linkSpanInline">
					<Link to="/portfolio">
						<FormattedMessage id="Header.link1" />
					</Link>
					<Link to="/about">
						<FormattedMessage id="Header.link2" />
					</Link>
				</span>
			</span>
			<span id="linkSpan">
				<Link to="/portfolio">
					<FormattedMessage id="Header.link1" />
				</Link>
				<Link to="/about">
					<FormattedMessage id="Header.link2" />
				</Link>
			</span>
			<span>
				<Darkmode />
				<Language
					language={language}
					setLanguage={setLanguage}
					setLangStorage={setLangStorage}
				/>
			</span>
		</header>
	);
};

export default injectIntl(Header);
