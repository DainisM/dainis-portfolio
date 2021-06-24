import React, { Suspense, useEffect, useRef, useMemo } from "react";

import { TextureLoader, LinearFilter } from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import lerp from "lerp";

import { FormattedMessage, injectIntl } from "react-intl";

import { Text } from "./Portfolio/text";
import Plane from "./Portfolio/plane";
import { Block, useBlock } from "./Portfolio/block";
import state from "./Portfolio/state";

import "../styles/Work.css";

function Startup() {
	const ref = useRef();
	useFrame(
		() =>
			(ref.current.material.opacity = lerp(
				ref.current.material.opacity,
				0,
				0.025
			))
	);
	return (
		<Plane
			ref={ref}
			color="#0e0e0f"
			position={[0, 0, 200]}
			scale={[100, 100, 1]}
		/>
	);
}
function Paragraph({ image, index, offset, factor, header, aspect, text }) {
	const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock();
	const size = aspect < 1 && !mobile ? 0.65 : 1;
	const alignRight = (canvasWidth - w * size - margin) / 2;
	const pixelWidth = w * state.zoom * size;
	const left = !(index % 2);
	const color = index % 2 ? "#D40749" : "#2FE8C3";

	return (
		<Block factor={factor} offset={offset + 0.2}>
			<group position={[left ? -alignRight : alignRight, 0, 0]}>
				<Plane
					map={image}
					args={[1, 1, 32, 32]}
					shift={75}
					size={size}
					aspect={aspect}
					scale={[w * size, (w * size) / aspect, 1]}
					frustumCulled={false}
				/>
				<Html
					style={{
						width: pixelWidth / (mobile ? 1 : 2),
						textAlign: left ? "left" : "right",
						fontSize: "1.1rem",
					}}
					position={[
						left || mobile ? (-w * size) / 2 : 0,
						(-w * size) / 2 / aspect - 1.4,
						1,
					]}
				>
					<div>{text}</div>
				</Html>
				<Text
					left={left}
					right={!left}
					size={w * 0.05}
					color={color}
					top
					position={[
						((left ? -w : w) / 2) * size,
						(w * size) / aspect / 1.7,
						-10,
					]}
				>
					{header}
				</Text>
				<Block factor={0.2}>
					<Text
						opacity={0.5}
						size={w * 0.1}
						color="#8b8b8b"
						position={[
							((left ? w : -w) / 2) * size,
							(w * size) / aspect / 1.3,
							-10,
						]}
					>
						{"0" + (index + 1)}
					</Text>
				</Block>
			</group>
		</Block>
	);
}

function Content() {
	const images = useLoader(
		TextureLoader,
		state.paragraphs.map(({ image }) => image)
	);
	useMemo(
		() => images.forEach((texture) => (texture.minFilter = LinearFilter)),
		[images]
	);
	const { contentMaxWidth: w } = useBlock();
	return (
		<>
			<Block factor={1} offset={0}>
				<Block factor={1.2}>
					<Text
						left
						size={w * 0.08}
						position={[-w / 3.2, 0.5, -1]}
						color="darkcyan"
					>
						{state.header}
						{/* My projects */}
						{/* <FormattedMessage id="ScrollPage.header" /> */}
					</Text>
				</Block>
				<Block factor={1.0}>
					<Html position={[-w / 3.2, -w * 0.15 + 0.25, -1]} size={15}>
						<div style={{ width: w, fontSize: "1.3rem" }}>
							{state.subheader}
							{/* It was the year 2076. The substance had arrived. */}
							{/* <FormattedMessage id="ScrollPage.subheader" /> */}
						</div>
					</Html>
				</Block>
			</Block>
			{state.paragraphs.map((props, index) => (
				<Paragraph
					key={index}
					index={index}
					{...props}
					image={images[index]}
					text={props.text}
				/>
			))}
		</>
	);
}

const Portfolio = () => {
	const scrollArea = useRef();
	const onScroll = (e) => (state.top.current = e.target.scrollTop);
	useEffect(() => void onScroll({ target: scrollArea.current }), []);
	return (
		<>
			<Canvas
				className="canvas"
				concurrent
				pixelRatio={1}
				orthographic
				camera={{ zoom: state.zoom, position: [0, 0, 500] }}
			>
				<Suspense
					fallback={<Html center className="loading" children="Loading..." />}
				>
					<Content />
					<Startup />
				</Suspense>
			</Canvas>
			<div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
				{new Array(state.sections).fill().map((_, index) => (
					<div
						key={index}
						id={"0" + index}
						style={{ height: `${(state.pages / state.sections) * 100}vh` }}
					/>
				))}
			</div>
			<div className="frame">
				<div className="frame__nav">
					<a className="frame__link" href="#00" children="intro" />
					<a className="frame__link" href="#01" children="01" />
					<a className="frame__link" href="#02" children="02" />
					<a className="frame__link" href="#03" children="03" />
					<a className="frame__link" href="#04" children="04" />
					<a className="frame__link" href="#05" children="05" />
				</div>
			</div>
		</>
	);
};

export default injectIntl(Portfolio);
