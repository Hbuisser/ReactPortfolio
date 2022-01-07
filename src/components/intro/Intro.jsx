import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backspeed: 80,
            strings: ['React Developer', 'React Native Developer'] 
        })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="./assets/man.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I am</h2>
                    <h1>Henry Buisseret</h1>
                    <h3>Freelance <span ref={textRef}>Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="../../assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
