import React from "react";
import { motion } from "framer-motion";

import "../styles/Darkmode.css";

import { btnVariants } from "./helpers/Variants";

const Darkmode = () => {
	//Applied to the button
	let clickedClass = "clicked";
	let clickedDark = "clickedDark";
	//Doc body element
	const body = document.body;
	//Class names to apply to the body
	const lightTheme = "light";
	const darkTheme = "dark";
	//Local prop to handle currently selected theme
	let theme;

	//Find value from local storage
	if (localStorage) {
		theme = localStorage.getItem("theme");
	}

	//Found value adding to CSS class body
	if (theme === lightTheme || theme === darkTheme) {
		body.classList.add(theme);
	}
	//If no value then default = light
	else {
		body.classList.add(lightTheme);
	}

	//Function for switching between themes
	const switchTheme = (e) => {
		//If darkmode active
		if (theme === darkTheme) {
			//Replace body class to light
			body.classList.replace(darkTheme, lightTheme);
			//Remove clicked from button
			e.target.classList.remove(clickedClass);
			//Add clickedDark to button
			e.target.classList.add(clickedDark);
			//Set local storage theme to light
			localStorage.setItem("theme", "light");
			//Set theme prop to light
			theme = lightTheme;
		}
		// If darkmode was off
		else {
			//Replace body class to dark
			body.classList.replace(lightTheme, darkTheme);
			//Remove clickedDark from button
			e.target.classList.remove(clickedDark);
			//Add clicked to button
			e.target.classList.add(clickedClass);
			//Set local storage theme to dark
			localStorage.setItem("theme", "dark");
			//Set theme prop to dark
			theme = darkTheme;
		}
	};

	return (
		<motion.button
			variants={btnVariants}
			whileHover="hover"
			//If theme dark then set clicked to empty
			className={theme === "dark" ? clickedClass : ""}
			id="darkMode"
			//On click call switch function
			onClick={(e) => switchTheme(e)}
		></motion.button>
	);
};

export default Darkmode;
