import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';


export default function AddProduct(){

	const navigate = useNavigate();

	const { user } = useContext(UserContext);


	// input states
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);

	function createProduct(e) {
		//prevent submit event's default behavior
		e.preventDefault();

		let token = localStorage.getItem('token');

		fetch(`${process.env.REACT_APP_API_URL}/products/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price
			})
		})
		.then(res => res.json())
		.then(data => {

			if(data){
				Swal.fire({
					icon: "success",
					title: "Product Added"
				})

				navigate("/products");
			} else {
				Swal.fire({
					icon: "error",
					title: "Unsuccessful Product Creation",
					text: data.message
				})
			}
		})

		setName("");
		setDescription("");
		setPrice(0);

	}

	return(

		(user.isAdmin === true) ?
		<>
			<h1 className="my-5 text-center">Add Product</h1>
			<Form onSubmit={e => createProduct(e)}>
			    <Form.Group>
			        <Form.Label>Name:</Form.Label>
			        <Form.Control type="text" placeholder="Enter Name" required value={name} onChange={e => {setName(e.target.value)}}/>
			    </Form.Group>
			    <Form.Group>
			        <Form.Label>Description:</Form.Label>
			        <Form.Control type="text" placeholder="Enter Description" required value={description} onChange={e => {setDescription(e.target.value)}}/>
			    </Form.Group>
			    <Form.Group>
			        <Form.Label>Price:</Form.Label>
			        <Form.Control type="number" placeholder="Enter Price" required value={price} onChange={e => {setPrice(e.target.value)}}/>
			    </Form.Group>
			    <Button variant="primary" type="submit" className="my-5">Submit</Button>
			</Form>
		</>
		:
		<Navigate to="/products" />

	)
}