// Import the mock data.
// import productsData from '../data/productsData';
// Import CourseCard component
import { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import UserContext from '../UserContext'

import UserView from '../components/UserView';
import AdminView from '../components/AdminView';


export default function Products() {

	// Check to see if the mock data was captured
	// console.log(productsData);

	const { user } = useContext(UserContext);

	const [products, setProducts] = useState([]);

	const fetchData = () => {
		// get all active products
		fetch(`${process.env.REACT_APP_API_URL}/products/all`)
		.then(res => res.json())
		.then(data => {

			console.log("data", data);

			setProducts(data);

		})
	}

	useEffect(() => {

		fetchData();

	}, [])

		return (
			<>
			{user.isAdmin === true ?
				<AdminView productsData={products} fetchData={fetchData} />
			:
				<UserView productsData={products} />

			}
		</>
		)
}