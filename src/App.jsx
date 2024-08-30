import "./App.css";
import NavBar from "./components/nav";
import Container from "./components/container";
import { useState } from "react";

function App() {
	const [val, setVal] = useState("");
	const [region, setRegion] = useState("All");

	return (
		<div className="h-screen w-screen font-[Gilroy-medium]">
			<NavBar val={setVal} setRegion={setRegion} />
			<Container value={val} region={region} />
		</div>
	);
}
export default App;
