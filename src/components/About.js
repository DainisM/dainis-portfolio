import React, { Suspense } from "react";

import { TextureLoader } from "three";
import { Canvas, useLoader, extend } from "@react-three/fiber";
import { Effects, Html } from "@react-three/drei";

import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";

import { isBrowser } from "react-device-detect";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBasketballBall,
	faCar,
	faFish,
	faGamepad,
	faHandSpock,
	faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { FormattedMessage, injectIntl } from "react-intl";

import { motion } from "framer-motion";
import {
	ballVariants,
	travelVariants,
	gamepadVariants,
	fishVariants,
	carVariants,
} from "./helpers/Variants";

import myImage from "../assets/images/myImage.jpg";

import "../styles/About.css";

extend({ GlitchPass });

function Image() {
	const texture = useLoader(TextureLoader, myImage);
	return (
		<mesh>
			<planeBufferGeometry attach="geometry" args={[10, 10]} />
			<meshBasicMaterial attach="material" map={texture} />
		</mesh>
	);
}

const About = () => {
	return (
		<div className="container-fluid main">
			<div className="row firstRow">
				<div className="col-lg-4">
					<Canvas>
						<Effects>
							<glitchPass attachArray="passes" />
						</Effects>
						<Suspense
							fallback={
								<Html center className="loading" children="Loading..." />
							}
						>
							<Image />
						</Suspense>
					</Canvas>
				</div>
				<div className="col-lg-8">
					<h1>
						Hi <FontAwesomeIcon icon={faHandSpock} color={"darkcyan"} />,
						<FormattedMessage id="AboutPage.welcome" />
					</h1>
					<p>
						<FormattedMessage id="AboutPage.section1.txt1" />
					</p>
					<p>
						<FormattedMessage id="AboutPage.section1.txt2" />
					</p>
					<p>
						<FormattedMessage id="AboutPage.section1.txt3" />
					</p>
				</div>
			</div>
			<div className="profSkillsDiv">
				<h3>
					<FormattedMessage id="AboutPage.section2.header" />
				</h3>
				<p>
					<FormattedMessage id="AboutPage.section2.subheader" />
				</p>
				<ul>
					<li>
						<FormattedMessage id="AboutPage.section2.txt1" />
					</li>
					<li>
						<FormattedMessage id="AboutPage.section2.txt2" />
					</li>
					<li>
						<FormattedMessage id="AboutPage.section2.txt3" />
					</li>
					<li>
						<FormattedMessage id="AboutPage.section2.txt4" />
					</li>
					<li>
						<FormattedMessage id="AboutPage.section2.txt5" />
					</li>
					<li>
						<FormattedMessage id="AboutPage.section2.txt6" />
					</li>
<li>
						<FormattedMessage id="AboutPage.section2.txt7" />
					</li>
<li>
						<FormattedMessage id="AboutPage.section2.txt8" />
					</li>
				</ul>
			</div>
			<div className="otherSkillsDiv">
				<h3>
					<FormattedMessage id="AboutPage.section3.header" />
				</h3>
				<p>
					<FormattedMessage id="AboutPage.section3.txt" />
				</p>
			</div>
			<div className="hobbiesDiv">
				<h3>
					<FormattedMessage id="AboutPage.section4.header" />
				</h3>
				<div className="row">
					<p>
						<FormattedMessage id="AboutPage.section4.txt1" />
					</p>
					{isBrowser ? (
						<motion.span variants={gamepadVariants} animate="animation">
							<FontAwesomeIcon icon={faGamepad} color={"grey"} size={"2x"} />
						</motion.span>
					) : null}
				</div>
				<div className="row">
					<p>
						<FormattedMessage id="AboutPage.section4.txt2" />
					</p>
					{isBrowser ? (
						<motion.span variants={carVariants} animate="animation">
							<FontAwesomeIcon icon={faCar} color={"#00818c"} size={"2x"} />
						</motion.span>
					) : null}
				</div>
				<div className="row">
					<p>
						<FormattedMessage id="AboutPage.section4.txt3" />
					</p>
					{isBrowser ? (
						<motion.span variants={travelVariants} animate="animation">
							<FontAwesomeIcon icon={faRoute} color={"green"} size={"2x"} />
						</motion.span>
					) : null}
				</div>
				<div className="row">
					<p>
						<FormattedMessage id="AboutPage.section4.txt4" />
					</p>
					{isBrowser ? (
						<motion.span variants={fishVariants} animate="animation">
							<FontAwesomeIcon icon={faFish} color={"#0094e3"} size={"2x"} />
						</motion.span>
					) : null}
				</div>
				<div className="row">
					<p>
						<FormattedMessage id="AboutPage.section4.txt5" />
					</p>
					{isBrowser ? (
						<motion.span variants={ballVariants} animate="animation">
							<FontAwesomeIcon
								icon={faBasketballBall}
								color={"#fc6203"}
								size={"2x"}
							/>
						</motion.span>
					) : null}
				</div>
			</div>
			<div className="contactDiv">
				<h3>
					<FormattedMessage id="AboutPage.section5.header" />
				</h3>
				<div>
					<p className="row">
						<FormattedMessage
							id="AboutPage.section5.txt1"
							values={{
								b: (...chunks) => (
									<b>
										&nbsp;<i>{chunks}</i>
									</b>
								),
							}}
						/>
					</p>
					<span className="row">
						<p>
							<FormattedMessage id="AboutPage.section5.txt2" />
						</p>
						<a href="https://github.com/DainisM" target="blank">
							{" "}
							<FontAwesomeIcon icon={faGithub} size={"2x"} />{" "}
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default injectIntl(About);
