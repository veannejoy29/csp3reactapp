import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';


export default function ProductCard({productProp}) {


	const {_id, name, description, price} = productProp;

	const [count, setCount] = useState(0);
	// const [seats, setSeats] =useState(30);

	// console.log(useState(0));
	// console.log(useState(0));

	// function order(){
	// 	setCount(count + 1);

	// 	console.log('Orders: ' + count);
	// }



	return (
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Subtitle>Description:</Card.Subtitle>
				<Card.Text>{description}</Card.Text>
				<Card.Subtitle>Price:</Card.Subtitle>
				<Card.Text>{price}</Card.Text>
				<Card.Text>Orders: {count}</Card.Text>
				<Link className="btn btn-primary" to={`/products/${_id}`}>Details</Link>
			</Card.Body>
		</Card>

	)
}

ProductCard.propTypes = {
	// The "shape" method is used to check if a prop object conforms to a specific shape
	productProp: PropTypes.shape({
		// Define the properties and their expected types
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}