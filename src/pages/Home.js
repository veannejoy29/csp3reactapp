import Banner from '../components/Banner';
import Highlights from '../components/Highlights';

export default function Home() {

	const data = {
		title: "Serene Scents",
		content: "Capturing Tranquility, One Scent at a Time.",
		destination: "/products",
		label: "Order now!"
	}

	return(
		<>
			<Banner data={data}/>
			<Highlights />
		</>
	)
}