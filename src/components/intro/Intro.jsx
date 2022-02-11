import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: false,
			backDelay: 1500,
			backspeed: 80,
			strings: ["Mongo DB", "Express", "React", "Node.js"],
		});
	}, []);

	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imageContainer">
					<img src="./assets/profil_montagne.jpg" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<div className="desc">
						<h2>Hi there, I am</h2>
						<h1>Henry Buisseret</h1>
						<h3>I help you to create <span>innovative tech products</span></h3>
					</div>
					{/* <h3>MERN Expert </h3>
					<span ref={textRef}></span> */}
				</div>
				<a href="#portfolio">
					<img src="../../assets/down.png" alt="" />
				</a>
			</div>
		</div>
	);
}
