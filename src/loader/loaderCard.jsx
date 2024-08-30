const LoaderCard = () => {
	return (
		<div className="border border-gray-200 rounded shadow animate-pulse p-2 dark:border-gray-400 relative h-[350px] w-[250px]">
			<div className="flex items-center justify-center h-36 bg-gray-300 rounded-[14px] dark:bg-gray-400 mb-8">
				<svg
					viewBox="0 0 16 20"
					fill="currentColor"
					xmlns=""
					aria-hidden="true"
					className="w-10 h-14 text-gray-200 dark:text-gray-600">
					<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path>
					<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path>
				</svg>
			</div>

			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-6 w-1/2 "></div>

			<div className="flex gap-2 mb-7">
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-1/4"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-1/2"></div>
			</div>

			<div className="flex gap-2 mb-7">
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-1/4"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-1/2"></div>
			</div>

			<div className="flex gap-2 mb-7">
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-1/4"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-1/2"></div>
			</div>

			<span className="sr-only">Loading...</span>
		</div>
	);
};

export default LoaderCard;
