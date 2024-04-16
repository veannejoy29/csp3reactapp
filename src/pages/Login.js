import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function Login() {

	const { user, setUser } = useContext(UserContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [isActive, setIsActive] = useState(false);

	function authenticate(e){
		e.preventDefault();

		fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {

			console.log(data);

			if(typeof data.access !== "undefined"){

				// Set the token of the authenticated user in the local storage
				localStorage.setItem('token', data.access);

				// Set the global state "user" to the token received from loggin in.
				// setUser({
				// 	token: localStorage.getItem('token')
				// });

				// function for retrieving user details
				retrieveUserDetails(data.access);

				// alert('You are now logged in');
				Swal.fire({
					title: "Login Successful",
					icon: "success",
					text: "Welcome to Serene Scents!"
				})

			} else {
				// alert(`${email} does not exist`);
				Swal.fire({
					title: "Authentication failed",
					icon: "error",
					text: "Check your login details and try again."
				})
			}
		});

		// Clear input fields after submission
		setEmail('');
		setPassword('');

	}

	const retrieveUserDetails = (token) => {

		fetch(`${process.env.REACT_APP_API_URL}/users/userDetails`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setUser({
				id: data._id,
				isAdmin: data.isAdmin
			})

		})
	}

	useEffect(() => {

		if(email !== "" && password !== ""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}

	}, [email, password]);

	return (
		(user.id !== null) ?
			<Navigate to="/products" />
		:

			<Form onSubmit={(e) => authenticate(e)}>
				<h1 className="my-5 text-center">Login</h1>
				<Form.Group controlId="userEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control 
						type="email" 
						placeholder="Enter email" 
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control 
						type="password" 
						placeholder="Password" 
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				{isActive ?
					<Button variant="primary" type="submit" id="submitBtn">
						Submit
					</Button>
					:
					<Button variant="danger" type="submit" id="submitBtn" disable>
						Submit
					</Button>

				}
			</Form>       
	)
}