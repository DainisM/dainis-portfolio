import React, { useState } from "react";
import { motion } from "framer-motion";

import { btnVariants, languageVariants } from "./helpers/Variants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "../styles/Language.css";

import flagUK from "../assets/images/flag-uk.png";
import flagDK from "../assets/images/flag-dk.png";

//Dropdown items used in dropdown
const options = [
	{
		value: "en-US",
		label: (
			<div className="flagItem">
				<img src={flagUK} height="30px" width="30px" alt="UK Flag" />{" "}
				<p>English</p>
			</div>
		),
	},
	{
		value: "da-DK",
		label: (
			<div className="flagItem">
				<img src={flagDK} height="30px" width="30px" alt="DK Flag" />{" "}
				<p>Dansk</p>
			</div>
		),
	},
];

const Language = ({ language, setLanguage, setLangStorage }) => {
	//State hook for toggling div visibility
	const [isOpen, setIsOpen] = useState(false);
	//State hook for updating language selected
	const [selectedOption, setSelectedOption] = useState(language);

	//Toggle between isOpen state
	const toggling = () => setIsOpen(!isOpen);

	//On selected item in dropdown update date
	const onOptionClicked = (value) => () => {
		//Set selected option
		setSelectedOption(value.value);
		//Set language value
		setLanguage(value.value);
		//Set new localStorage value for "language"
		setLangStorage(value.value.toString());
		setIsOpen(false);
	};

	return (
		<div className="Main">
			<div className="DropDownContainer">
				<motion.div
					className="DropDownHeader"
					onClick={toggling}
					variants={btnVariants}
					whileHover="hover"
				>
					{selectedOption === "en-US" ? (
						<div>
							<img src={flagUK} height="40px" width="40px" alt="UK Flag" />
							<FontAwesomeIcon
								icon={faChevronDown}
								size="lg"
								color={"white"}
								style={{ marginLeft: "30px", paddingTop: "10px" }}
							/>
						</div>
					) : (
						<div>
							<img src={flagDK} height="40px" width="40px" alt="DK Flag" />
							<FontAwesomeIcon
								icon={faChevronDown}
								size="lg"
								color={"white"}
								style={{ marginLeft: "30px", paddingTop: "10px" }}
							/>
						</div>
					)}
				</motion.div>
				{isOpen && (
					<motion.div
						className="DropDownBox"
						variants={languageVariants}
						initial="hidden"
						animate={isOpen ? "visible" : "hidden"}
					>
						<ul className="DropDownList">
							{options.map((option) => (
								<li
									className="ListItem"
									onClick={onOptionClicked(option)}
									key={Math.random()}
								>
									{option.label}
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Language;
