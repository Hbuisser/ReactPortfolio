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
			<div className="wrapper">
				<div className="desc">
					<h2>Meet your next</h2>
					<h1>Full-Stack Developer.</h1>
					<hr />
					<h3>
						I help you to create <span>innovative tech products</span>
					</h3>
				</div>
			</div>
			<a href="#portfolio">
				<img src="assets/whiteDown.png" alt="" />
			</a>
		</div>
	);
}
