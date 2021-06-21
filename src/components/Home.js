import React, { Suspense, useState, useRef, useEffect } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import {
	softShadows,
	Loader,
	OrbitControls,
	useTexture,
} from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

import Lights from "./Chest/lights";
import Model from "./Chest/chest";
import Floor from "./Chest/floor";

import CsharpIcon from "../assets/images/CsharpIcon.png";
import HtmlIcon from "../assets/images/HtmlIcon.png";
import CssIcon from "../assets/images/CssIcon.png";
import JsIcon from "../assets/images/JsIcon.png";
import ReactJsIcon from "../assets/images/ReactJsIcon.png";
import ReactNativeIcon from "../assets/images/ReactNativeIcon.png";
import SQLIcon from "../assets/images/SqlIcon.png";

import "../styles/Home.scss";

softShadows();

//Method to create new mesh objects with params
const SkillMesh = ({ show, position, args, myTexture }) => {
	//ref to target the mesh
	const mesh = useRef();

	//useFrame allows us to re-render/update rotation on each frame
	useFrame(() =>
		stopRotation
			? (mesh.current.rotation.x = mesh.current.rotation.y = 0)
			: (mesh.current.rotation.x = mesh.current.rotation.y += 0.01)
	);

	//Update rotation state when chest closes
	useEffect(() => {
		setStopRotation(false);
	}, [show]);

	//Loading textures
	const [texture] = useTexture([myTexture]);

	//Basic expand state
	const [stopRotation, setStopRotation] = useState(false);

	//Animate mesh on state change
	const props = useSpring({
		position: show ? position : [0, 0, 0],
		scale: show ? [1, 1, 1] : [0.1, 0.1, 0.1],
	});

	return (
		<a.mesh
			scale={props.scale}
			position={props.position}
			ref={mesh}
			castShadow
			receiveShadow
			onClick={() => setStopRotation(!stopRotation)}
		>
			<boxBufferGeometry attach="geometry" args={args} />
			<meshBasicMaterial attach="material" map={texture} />
		</a.mesh>
	);
};

const Home = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Canvas
				colorManagement
				shadows
				camera={{ position: [-5, 4, 4], fov: 75 }}
			>
				<Lights />
				<Suspense fallback={null}>
					<Model open={open} setOpen={setOpen} />
					<Floor />
					<OrbitControls
						maxPolarAngle={Math.PI / 2}
						minPolarAngle={0}
						enablePan={false}
					/>
					<SkillMesh
						position={[1, 2, 3]}
						show={open}
						args={[1, 1, 1]}
						myTexture={CsharpIcon}
					/>

					<SkillMesh
						position={[-2, 1, -2]}
						show={open}
						args={[1, 1, 1]}
						myTexture={HtmlIcon}
					/>

					<SkillMesh
						position={[1, 2, -3]}
						show={open}
						args={[1, 1, 1]}
						myTexture={CssIcon}
					/>

					<SkillMesh
						position={[2, 0, -2]}
						show={open}
						args={[1, 1, 1]}
						myTexture={JsIcon}
					/>

					<SkillMesh
						position={[-1, 2, 2]}
						show={open}
						args={[1, 1, 1]}
						myTexture={ReactJsIcon}
					/>

					<SkillMesh
						position={[3, 1, 2]}
						show={open}
						args={[1, 1, 1]}
						myTexture={ReactNativeIcon}
					/>

					<SkillMesh
						position={[3, 2, 0]}
						show={open}
						args={[1, 1, 1]}
						myTexture={SQLIcon}
					/>
				</Suspense>
			</Canvas>
			<Loader />
			<div className="homeDiv">
				<h1>My Skills</h1>
			</div>

			<div className="container mouseTip">
				<span className="row">
					<p>* Use your mouse to play around in animation</p>
					<FontAwesomeIcon id="mouseIcon" icon={faMouse} />
				</span>
			</div>
		</>
	);
};

export default Home;
