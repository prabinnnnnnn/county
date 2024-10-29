import "./App.css";
import NavBar from "./components/nav";
import Container from "./components/container";
import { useState } from "react";
import { Outlet } from 'react-router-dom'

function App() {
	const [val, setVal] = useState("");
	const [region, setRegion] = useState("All");

	return (
		<div className="h-screen w-screen font-[Gilroy-medium]">
			<NavBar val={setVal} setRegion={setRegion} />
			<Container value={val} region={region} />
			<Outlet></Outlet>
		</div>
	);
}
export default App;
