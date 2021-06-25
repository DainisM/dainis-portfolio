import React, { Suspense } from "react";

import { TextureLoader } from "three";
import { Canvas, useLoader, extend } from "@react-three/fiber";
import { Effects, Html } from "@react-three/drei";

import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBasketballBall,
	faCar,
	faFish,
	faGamepad,
	faHandSpock,
	faRoute,
} from "@fortawesome/free-solid-svg-icons";

import { FormattedMessage, injectIntl } from "react-intl";

import myImage from "../assets/images/myImage.jpg";

import "../styles/About.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
			<div className="hobbiesDiv">
				<h3>
					<FormattedMessage id="AboutPage.section2.header" />
				</h3>
				<div className="row">
					<p>
						<FormattedMessage id="AboutPage.section2.txt1" />
					</p>
					<span>
						<FontAwesomeIcon icon={faGamepad} size={"2x"} />
					</span>
				</div>
				<div className="row">
					<p>
						<FormattedMessage id="AboutPage.section2.txt2" />
					</p>
					<span>
						<FontAwesomeIcon icon={faCar} size={"2x"} />
					</span>
				</div>
				<div className="row">
					<p>
						<FormattedMessage id="AboutPage.section2.txt3" />
					</p>
					<span>
						<FontAwesomeIcon icon={faRoute} size={"2x"} />
					</span>
				</div>
				<div className="row">
					<p>
						<FormattedMessage id="AboutPage.section2.txt4" />
					</p>
					<span>
						<FontAwesomeIcon icon={faFish} size={"2x"} />
					</span>
				</div>
				<div className="row">
					<p>
						<FormattedMessage id="AboutPage.section2.txt5" />
					</p>
					<span>
						<FontAwesomeIcon icon={faBasketballBall} size={"2x"} />
					</span>
				</div>
			</div>
			<div className="profSkillsDiv">
				<h3>
					<FormattedMessage id="AboutPage.section3.header" />
				</h3>
			</div>
			<div className="otherSkillsDiv">
				<h3>
					<FormattedMessage id="AboutPage.section4.header" />
				</h3>
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
										<i>{chunks}</i>
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
