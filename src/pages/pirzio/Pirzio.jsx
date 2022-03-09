import "./pirzio.scss";
import Topbar from "../../components/topbar/Topbar";
import Menu from "../../components/menu/Menu";
import { useState } from "react";

export default function Pirzio() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="containerPirzio">
				<div className="wrapperPirzio">
					<div className="infoPirzio">
						<h1>
							Title: Cécile Pirzio-Biroli
						</h1>
						<h1>
							Stack: Ruby on Rails
						</h1>
					</div>
					<div className="descPirzio">
						<p>A website showing the work of the belgian artist Cécile Pirzio-Biroli.</p>
					</div>
				</div>
                <div className="imagePirzio">
                    <img className="imgPirzio" src="assets/PIRZIO.png" alt=""/>
                </div>
			</div>
		</div>
	);
}
