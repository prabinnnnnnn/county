const CountryCard = ({ data }) => {
	return (
		<div className="h-[350px] w-[250px] shadow shadow-slate-400 relative p-2 hover:scale-[1.03] ease-linear duration-[0.2s] rounded-md max-md:w-[190px] max-md:h-[250px] max-sm:h-[230px] max-sm:w-[160px] dark:bg-slate-800 dark:text-white">
			<div className="h-[45%] w-full rounded-[14px] overflow-hidden shadow">
				<img
					src={data.flags.svg}
					alt=""
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="flex items-start flex-col gap-3 py-5 max-sm:py-4 max-sm:gap-2 max-sm:text-[11px]">
				<h2 className="text-[20px] font-[Gilroy-bold] max-sm:text-[12px]">
					{data.name.common}
				</h2>
				<p>Population: {data.population} </p>
				<p>Region: {data.continents} </p>
				<p>Capital: {data.capital} </p>
			</div>
		</div>
	);
};
export default CountryCard;
