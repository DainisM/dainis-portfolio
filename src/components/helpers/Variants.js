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
