import { useEffect, useState } from "react";
import Loader from "../loader/loader";
import CountryCard from "./countryCard";
import { getData } from "../api";

const Container = ({ value, region }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		getData().then((countryData) => setData(countryData));
	}, []);

	return (
		<div className="h-[90%] w-full overflow-hidden">
			<div
				className="country-cards h-full w-full p-4 gap-4 grid grid-cols-5 justify-center overflow-y-auto
				 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-3
       max-sm:p-2 max-sm:gap-2 dark:bg-slate-600">
				{data ? (
					data
						.filter((data) => {
							if (region == "All") {
								return data;
							} else if (data.continents.includes(region)) {
								return data;
							}
						})
						.filter((countrys) => {
							if (value == "") {
								return countrys;
							} else if (
								countrys.name.common.toLowerCase().includes(value)
								// countrys.name.common.toLowerCase().charAt(0).includes(value)
							) {
								return countrys;
							}
						})
						.map((data) => <CountryCard data={data} key={data.name.common} />)
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default Container;
