import LoaderCard from "./loaderCard";
import axious from 'axios'

const Loader = () => {

	

	return (
		<div className='h-full w-screen grid grid-cols-5 gap-0 overflow-hidden'>
			<LoaderCard/>
			<LoaderCard/>
			<LoaderCard/>
			<LoaderCard/>
			<LoaderCard/>
			<LoaderCard/>
			<LoaderCard/>
			<LoaderCard/>
			<LoaderCard/>
			<LoaderCard/>
		</div>
	);
};

export default Loader;
