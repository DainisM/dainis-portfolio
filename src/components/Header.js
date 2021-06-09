import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import Language from "./Language";

import "../styles/Header.css";

const Header = ({ language, setLanguage, setLangStorage }) => {
	return (
		<header>
			<span>
				<h3>Dainis Moisejenko</h3>
				<h5>
					<FormattedMessage id="HomePage.subTitle" />
				</h5>
			</span>
			<span>
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
