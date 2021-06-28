import { createRef } from "react";

import { defineMessage, createIntl } from "react-intl";

import img1 from "../../assets/images/portfolioImages/youbankImg.png";
import img2 from "../../assets/images/portfolioImages/fedtnessImg.png";
import img3 from "../../assets/images/portfolioImages/musicmixWebImg.jpg";
import img4 from "../../assets/images/portfolioImages/musicmixMobileImg.png";
import img5 from "../../assets/images/portfolioImages/wpfSystemImg.jpg";

//Get the locale language from localStorage
const locale = localStorage.getItem("language");

const messages = defineMessage({
	en: {
		header: {
			id: "My projects",
			defaultMessage: "My projects",
		},
		subheader: {
			id: "subheader",
			defaultMessage:
				"Here are some of the projects I have made. Some of the projects were made in groups with others and are part of the complete system, but are made by me.",
		},
		first: {
			id: "firstText",
			defaultMessage:
				"This was a group project and we needed to make - an mobile app, web app, Rest API and host it all. I was given a task to create this website and helped a little bit in creating the API. The idea for this website is that is should idtroduce users to your mobile banking app. This website was made in React JS and I added small animations/motions to some elements with the help of framer-motion package and intlt for multilanguage support. Also I made a darkmode which users can toggle (and language) in the header. Also I tried to make it responsive for it to look good also in mobile devices. {link}",
		},
		second: {
			id: "secondText",
			defaultMessage:
				"This was a group project and we needed to make - an mobile app, simple SPA, Rest API and host it all. I was given a task to create the app and was helping creating the API. The idea was to make a fitness app which can help user with their workouts. Users can choose between different types of workouts, choose exercises for different muscle groups, make their own weekly trainnig plan and much more. This App was made in React Native and data was send/received by API (made in ASP.Net) which was hosted on IIS server. {link}",
		},
		third: {
			id: "thirdText",
			defaultMessage:
				"My idea was to make a small web app that can be used to listen to music - like Spotify. My web app needs to store and sort all songs in playlists for easy user experience just like Spotify does. User needed to create and then login with an account to be able to browse and listen to music. User could browse music sortet in playlists, search for songs or artists and create their own playlist to save their liked songs into them. One of the purposes was to learn and try ReactJS. I have chosen to work with ReactJS because I had some experience with JavaScript before and ReactJS is very popular JavaScript library that many people use. I choose Node.js with Express.js to make my REST API. {link}",
		},
		fourth: {
			id: "fourthText",
			defaultMessage:
				"This is an mobile application for my previous projects - MusicMix (Web) - that uses the same API (written in Node.js with Express.js) and lets user access and listen to songs and users own playlists and information. The idea (again) was to make an Spotify like mobile app using React Native. User can find all sort of music by music genre or mood (chill, motivation, workout etc.), find all songs and some info for artist/band and of course make and listen to his own playlists which user can add or remove songs from. {link}",
		},
		fifth: {
			id: "fifthText",
			defaultMessage:
				"I worked in the group of 3 people and we had to develop 3 new systems: Web, Windows and Android application. I was tasked with the objective to make a Windows app which I did make with WPF in C#. The task was to implement these 3 new systems and to replace the old approach with Excel documents for the ticket system. The app must be able to register and control tickets by the date received and their status, who is working on it, etc. {link}",
		},
	},
	dk: {
		header: {
			id: "Mine projekter",
			defaultMessage: "Mine projekter",
		},
		subheader: {
			id: "subheader",
			defaultMessage:
				"Her er nogle af de projekter, jeg har lavet. Nogle af projekterne blev lavet i grupper med andre og er en del af det komplette system, men er lavet af mig.",
		},
		first: {
			id: "firstText",
			defaultMessage:
				"Dette var en gruppe projekt og vi skulle lave - en mobil app, web-app, Rest API og host det hele. Jeg fik til opgave at lave denne hjemmeside samt jeg hjalp en lille smule med oprettelse af API. Ideen til dette websted er, at idtroducere brugere til vores mobilbankapp. Dette websted blev lavet i React JS, og jeg tilføjede små animationer / bevægelser til nogle elementer ved hjælp af framer-motion pakken og intlt til understøttelse af flere sprog. Jeg lavede også en darkmode, som brugerne kan skifte i headeren. Jeg forsøgte også at gøre det responsive for at det ser godt ud også på mobile enheder. {link}",
		},
		second: {
			id: "secondText",
			defaultMessage:
				"Dette var en gruppe projekt og vi skulle lave - en mobil app, enkel SPA, Rest API og host det hele. Jeg fik til opgave at oprette appen og var med til at skabe API'et. Ideen var at lave en fitnessapp, der kan hjælpe brugerne med deres træning. Brugere kan vælge mellem forskellige typer træning, vælge øvelser til forskellige muskelgrupper, lave deres egen ugentlige trainnigplan og meget mere. Denne app blev lavet i React Native, og data blev sendt / modtaget af API (lavet i ASP.Net), som var hostet på IIS-serveren. {link}",
		},
		third: {
			id: "thirdText",
			defaultMessage:
				"Min idé var at lave en lille webapp, der kan bruges til at lytte til musik - ligesom Spotify. Min webapp skal gemme og sortere alle sange i playlister for nem brugeroplevelse ligesom Spotify gør. Brugeren havde brug for at oprette og derefter logge ind med en konto for at kunne gennemse og lytte til musik. Brugeren kunne gennemse musik sortet i afspilningslister, søge efter sange eller kunstnere og oprette deres egen afspilningsliste for at gemme de sange de kan lide.  Et af formålene var at lære og prøve ReactJS. Jeg har valgt at arbejde med ReactJS, fordi jeg tidligere havde erfaring med JavaScript, og ReactJS er et meget populært JavaScript-bibliotek, som mange bruger. Jeg vælger Node.js med Express.js for at oprette min REST API. {link}",
		},
		fourth: {
			id: "fourthText",
			defaultMessage:
				"Dette er en mobilapplikation til mine tidligere projekter - MusicMix (Web) - der bruger den samme API (skrevet i Node.js med Express.js) og giver brugeren adgang til og lytter til sange og brugernes egne playlister og information. Ideen (igen) var at lave en Spotify-lignende mobilapp ved hjælp af React Native. Brugeren kan finde al slags musik efter musikgenre eller humør (chill, motivation, træning osv.), Finde alle sange og noget info til kunstner / band og selvfølgelig lave og lytte til sine egne afspilningslister, som brugeren kan tilføje eller fjerne sange fra. {link}",
		},
		fifth: {
			id: "fifthText",
			defaultMessage:
				"Jeg arbejdede i gruppen på 3 personer, og vi var nødt til at udvikle 3 nye systemer: Web-, Windows- og Android-applikationer. Jeg fik til opgave at skabe en Windows-app, som jeg lavede med WPF i C #. Opgaven var at implementere disse 3 nye systemer og at erstatte den gamle tilgang med Excel-dokumenter til billetsystemet. Appen skal kunne registrere og kontrollere billetter efter dens modtagne dato og deres status, hvem der arbejder med det osv. {link}",
		},
	},
});

const intl = createIntl({ locale, messages });

const state = {
	sections: 7,
	pages: 6,
	zoom: 1,
	header:
		locale === "da-DK"
			? intl.formatMessage(messages.dk.header)
			: intl.formatMessage(messages.en.header),
	subheader:
		locale === "da-DK"
			? intl.formatMessage(messages.dk.subheader)
			: intl.formatMessage(messages.en.subheader),
	paragraphs: [
		{
			offset: 1,
			factor: 1.75,
			header: "YouBank",
			image: img1,
			aspect: 1.51,
			text:
				locale === "da-DK"
					? intl.formatMessage(messages.dk.first, {
							link: (
								<a href="https://github.com/P5-Tec/ReactV2" target="blank">
									Kode og mere
								</a>
							),
					  })
					: intl.formatMessage(messages.en.first, {
							link: (
								<a href="https://github.com/P5-Tec/ReactV2" target="blank">
									Code and more
								</a>
							),
					  }),
		},
		{
			offset: 2,
			factor: 2.0,
			header: "Fedtness",
			image: img2,
			aspect: 1.5,
			text:
				locale === "da-DK"
					? intl.formatMessage(messages.dk.second, {
							link: (
								<a href="https://github.com/Fedtness/FitnessApp" target="blank">
									Kode og mere
								</a>
							),
					  })
					: intl.formatMessage(messages.en.second, {
							link: (
								<a href="https://github.com/Fedtness/FitnessApp" target="blank">
									Code and more
								</a>
							),
					  }),
		},
		{
			offset: 3,
			factor: 2.25,
			header: "MusicMix (Web)",
			image: img3,
			aspect: 1.5037,
			text:
				locale === "da-DK"
					? intl.formatMessage(messages.dk.third, {
							link: (
								<a
									href="https://github.com/DainisM/MusicMix-web-app"
									target="blank"
								>
									Kode og mere
								</a>
							),
					  })
					: intl.formatMessage(messages.en.third, {
							link: (
								<a
									href="https://github.com/DainisM/MusicMix-web-app"
									target="blank"
								>
									Code and more
								</a>
							),
					  }),
		},
		{
			offset: 4,
			factor: 2.0,
			header: "MusicMix (Mobile)",
			image: img4,
			aspect: 1.665,
			text:
				locale === "da-DK"
					? intl.formatMessage(messages.dk.fourth, {
							link: (
								<a
									href="https://github.com/DainisM/MusicMix-Online"
									target="blank"
								>
									Kode og mere
								</a>
							),
					  })
					: intl.formatMessage(messages.en.fourth, {
							link: (
								<a
									href="https://github.com/DainisM/MusicMix-Online"
									target="blank"
								>
									Code and more
								</a>
							),
					  }),
		},
		{
			offset: 5,
			factor: 1.75,
			header: "WPF Ticket system",
			image: img5,
			aspect: 1.55,
			text:
				locale === "da-DK"
					? intl.formatMessage(messages.dk.fifth, {
							link: (
								<a
									href="https://github.com/DainisM/WPF_Ticket_System"
									target="blank"
								>
									Kode og mere
								</a>
							),
					  })
					: intl.formatMessage(messages.en.fifth, {
							link: (
								<a
									href="https://github.com/DainisM/WPF_Ticket_System"
									target="blank"
								>
									Code and more
								</a>
							),
					  }),
		},
	],
	top: createRef(),
};

export default state;
