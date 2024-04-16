import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function PreviewProducts({data, breakPoint}){

	// Desctructure the products data here
	const { _id, name, description, price } = data;

	return(
		<Col xs={12} md={breakPoint}>
			<Card className="cardHighlight mx-2">
				<Card.Body>
					<Card.Title className="text-center">
						<Link to={`/products/${_id}`}>{name}</Link>
					</Card.Title>
					<Card.Text>{description}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<h5 className="text-center">₱{price}</h5>
					<Link to={`/products/${_id}`} className="btn btn-primary d-block">Details</Link>
				</Card.Footer>
			</Card>
		</Col>

	)
}