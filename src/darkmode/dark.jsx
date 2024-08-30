import { useState, useEffect } from "react";

const DarkMode = () => {
	const [selectDark, setDark] = useState("light");

	const darkModeHandle = () => {
		setDark(selectDark == "light" ? "dark" : "light");
	};

	useEffect(() => {
		if (selectDark == "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [selectDark]);

	return (
		<div
			title="dark mode"
			className={`light h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out 
      ${selectDark == "light" && "bg-slate-200"}
      ${selectDark == "dark" && "bg-slate-600"}
     ring-black/20`}>
			<div
				className={`h-4 w-4 rounded-full bg-white shadow-sm cursor-pointer ring-1 ring-slate-700/10 transition duration-200 ease-in-out
      ${selectDark == "light" && "translate-x-0"}
      ${selectDark == "dark" && "translate-x-4"}`}
				onClick={darkModeHandle}></div>
		</div>
	);
};

export default DarkMode;
