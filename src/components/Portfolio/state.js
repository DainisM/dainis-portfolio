import { createRef, useState } from "react";

import img1 from "../../assets/images/portfolioImages/youbankImg.png";
import img2 from "../../assets/images/portfolioImages/fedtnessImg.png";
import img3 from "../../assets/images/portfolioImages/musicmixMobileImg.png";
import img4 from "../../assets/images/portfolioImages/musicmixWebImg.jpg";
import img5 from "../../assets/images/portfolioImages/wpfSystemImg.jpg";

const state = {
	sections: 7,
	pages: 6,
	zoom: 1,
	header: "My projects",
	subheader:
		"Here are some of my projects I have made, Some of them were made in groups with other and/or are part of the complete system, but what you are seeing here is made by me.",
	paragraphs: [
		{
			offset: 1,
			factor: 1.75,
			header: "YouBank",
			image: img1,
			aspect: 1.51,
			text: "Two thousand pharmacologists and bio-chemists were subsidized.",
		},
		{
			offset: 2,
			factor: 2.0,
			header: "Fedtness",
			image: img2,
			aspect: 1.5,
			text: "The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend.",
		},
		{
			offset: 3,
			factor: 2.25,
			header: "MusicMix (Mobile)",
			image: img3,
			aspect: 1.5037,
			text: "The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from — back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different.",
		},
		{
			offset: 4,
			factor: 2.0,
			header: "MusicMix (Web)",
			image: img4,
			aspect: 1.665,
			text: "We’ve found that the people whose EEG doesn’t show any alpha-wave activity when they’re relaxed aren’t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation.",
		},
		{
			offset: 5,
			factor: 1.75,
			header: "WPF Ticket system",
			image: img5,
			aspect: 1.55,
			text: "By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won’t be compelled by one’s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing.",
		},
	],
	top: createRef(),
};

export default state;
