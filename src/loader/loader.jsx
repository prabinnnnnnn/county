import LoaderCard from "./loaderCard";

const Loader = () => {
	return (
		<div className=" h-full w-screen grid grid-cols-5 overflow-hidden gap-y-2  max-sm:grid-cols-2">
			<LoaderCard></LoaderCard>
			<LoaderCard></LoaderCard>
			<LoaderCard></LoaderCard>
			<LoaderCard></LoaderCard>
			<LoaderCard></LoaderCard>
			<LoaderCard></LoaderCard>
			<LoaderCard></LoaderCard>
			<LoaderCard></LoaderCard>
			<LoaderCard></LoaderCard>
			<LoaderCard></LoaderCard>
		</div>
	);
};

export default Loader;
