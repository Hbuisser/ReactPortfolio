import "./portfolio.scss";
import PortfolioList from "./portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import {
	featuredPortfolio,
	webPortfolio,
	mobilePortfolio,
	designPortfolio,
	contentPortfolio,
} from "../../data.js";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
	const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const navigate = useNavigate();

	const list = [
		{
			id: "featured",
			title: "Featured",
		},
		{
			id: "web",
			title: "Web App",
		},
		{
			id: "mobile",
			title: "Mobile App",
		},
		{
			id: "content",
			title: "Game",
		},
		{
			id: "design",
			title: "Software",
		},
	];

	useEffect(() => {
		switch (selected) {
			case "featered":
				setData(featuredPortfolio);
				break;
			case "web":
				setData(webPortfolio);
				break;
			case "mobile":
				setData(mobilePortfolio);
				break;
			case "content":
				setData(contentPortfolio);
				break;
			case "design":
				setData(designPortfolio);
				break;
			default:
				setData(featuredPortfolio);
		}
	}, [selected]);

	const handleClick = (id) => {
		if (id === 4) {
            // window.location.href = "https://www.cecilepirziobiroli.be";
            navigate("/pirzio");
		}
	};

	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				{list.map((item) => (
					<PortfolioList
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
						id={item.id}
						key={item.id}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((d) => (
					<div className="item" key={d.id} onClick={() => handleClick(d.id)}>
						<img src={d.img} alt="" />
						<h3>{d.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
}
