import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';


export default function ProductView() {

	const { productId } = useParams();
	const navigate = useNavigate();

	const { user } = useContext(UserContext);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);

	// To order the user
	const order = (productId) => {

		fetch(`${ process.env.REACT_APP_API_URL }/users/order`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productId: productId
			})
		})
		.then(res => res.json())
		.then( data => {

			console.log(data)

			if(data.message === "Ordered Successfully.") {
				Swal.fire({
					title: "Successfully ordered",
					icon: "success",
					text: "You have successfully ordered this item."
				})

				navigate("/products");

			} else {
				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: "Please try again."
				})
			}

		})

	}


	// Retrieve product details
	useEffect(() => {

		console.log(productId);

		fetch(`${ process.env.REACT_APP_API_URL }/products/${productId}`)
		.then(res => res.json())
		.then(data => {

			console.log(data);

			setName(data.name);
			setDescription(data.description);
			setPrice(data.price);

		})

	}, [productId])

	return (
		<Container className="mt-5">
			<Row>
				<Col lg={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body>
							<Card.Title>{name}</Card.Title>
							<Card.Subtitle>Description:</Card.Subtitle>
							<Card.Text>{description}</Card.Text>
							<Card.Subtitle>Price:</Card.Subtitle>
							<Card.Text>PhP {price}</Card.Text>

							{(user.id !== null) ?
								<Button variant="primary" block onClick={() => order(productId)} >Order</Button>
							:
								<Link className="btn btn-danger btn-block" to="/login" >Log in to Order</Link>

							}
							
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}