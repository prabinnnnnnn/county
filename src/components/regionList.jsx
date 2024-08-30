import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const data = [
	{ id: 0, continent: "All" },
	{ id: 1, continent: "Asia" },
	{ id: 2, continent: "Africa" },
	{ id: 3, continent: "Europe" },
	{ id: 4, continent: "North America" },
	{ id: 5, continent: "Oceania" },
	{ id: 6, continent: "South America" },
];

function Selector({ setRegion }) {
	const [selectedPerson, setSelectedPerson] = useState(data[0]);

	return (
		<div className="h-10 w-40 shadow bg-slate-200 rounded-md dark:bg-slate-600 dark:text-white">
			<Listbox value={selectedPerson} onChange={setSelectedPerson}>
				<ListboxButton className="h-full w-full flex justify-start items-center px-4 rounded-md relative">
					{selectedPerson.continent}
					<ChevronDownIcon
						className="h-5 w-5 text-black absolute right-2 dark:text-white"
						aria-hidden="true"
					/>
				</ListboxButton>

				<ListboxOptions
					anchor="bottom"
					className="h-[200px] w-40 p-2 bg-slate-200 rounded-md font-[Gilroy-medium] outline-none dark:bg-slate-600 dark:text-white">
					{data.map((countrys) => (
						<ListboxOption
							key={countrys.id}
							value={countrys}
							onClick={(e) => setRegion(e.target.innerText)}
							className="data-[focus]:bg-slate-100 dark:data-[focus]:bg-slate-400 p-2 rounded-md cursor-pointer">
							{countrys.continent}
						</ListboxOption>
					))}
				</ListboxOptions>
			</Listbox>
		</div>
	);
}

export default Selector;
