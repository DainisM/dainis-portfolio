// Variants (Animation) for buttons:
// Makes button pulsate infinitely while mouse hovers over
export const btnVariants = {
	hover: {
		scale: 1.1,
		transition: {
			duration: 0.3,
			repeat: Infinity,
			repeatType: "mirror",
		},
	},
};

// Variants (Animation) for div with list of languages:
// Change opacity from  0 to 1 - show element, in 1 second
export const languageVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

// Variants (Animation) for mouse icon:
// Bounce in half-circle
export const mouseVariants = {
	animation: {
		x: [-10, 10],
		y: [-10, 10],
		transition: {
			x: {
				yoyo: Infinity,
				duration: 0.5,
			},
			y: {
				yoyo: Infinity,
				duration: 0.25,
				ease: "easeOut",
			},
			repeatType: "mirror",
		},
	},
};
