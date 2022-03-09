import "./app.scss";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Pirzio from "./pages/pirzio/Pirzio";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>} />
                <Route path="/pirzio" element={<Pirzio/>} />
			</Routes>
		</Router>
	);
}
