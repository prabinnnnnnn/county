import { GoSearch } from "react-icons/go";
import DarkMode from "../darkmode/dark";
import Selector from "./regionList";

const NavBar = ({ val, setRegion }) => {
	return (
		<div
			className="h-[10%] w-full bg-slate-100 flex justify-between px-[40px] items-center max-sm:h-[8%] max-sm:w-full
    max-sm:p-2 dark:bg-slate-800 ">
			<div className="h-10 w-[20%] relative max-sm:w-[35%] rounded-md">
				<input
					type="text"
					spellCheck="false"
					placeholder="Search country..."
					className="h-10 w-[100%]  rounded-md relative px-8 bg-slate-200 outline-slate-300 dark:bg-slate-600 dark:outline-slate-100 dark:text-white"
					onChange={(e) => val(e.target.value)}
				/>
				<GoSearch className="fa-solid fa-magnifying-glass text-slate-600 absolute top-[11px] left-[10px] dark:text-white" />
			</div>
			<div className="flex gap-x-4 justify-center items-center max-sm:gap-x-2">
				<Selector setRegion={setRegion} />
				<DarkMode></DarkMode>
			</div>
		</div>
	);
};

export default NavBar;

{
	/* 				<select className="filter-by-region h-10 px-2 w-[200px] flex justify-center items-center outline-none bg-slate-50 shadow rounded-md max-md:w-[150px]">
					<option hidden>Filter by Region</option>
					<option className="option" onClick={() => setRegion("All")}>
						All
					</option>
					<option value="Africa" onClick={() => setRegion("Africa")}>
						Africa
					</option>
					<option value="America">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select> */
}
