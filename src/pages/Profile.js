import { useContext, useEffect, useState  } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Profile() {

	const { user } = useContext(UserContext);

	const [details, setDetails ] = useState({});

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/users/userDetails`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			if(typeof data._id !== "undefined"){
				setDetails(data);
			}
		})
		
	}, []);

	return (

		(user.id === null) ?
			 <Navigate to="/products" />
		:
		<>
			<Row>
				<Col className="p-5 bg-primary text-white">
					<h1 className="my-5">Profile</h1>
					{/*<h2 className="mt-3">Gemini Norawit</h2>*/}
					<h2 className="mt-3">{`${details.firstName} ${details.lastName}`}</h2>
					<hr />
					<h4>Contacts</h4>
					<ul>
						{/*<li>Email: fouth@mail.com</li>*/}
						<li>Email: {details.email}</li>
						{/*<li>Mobile No: 09123456789</li>*/}
						<li>Mobile No: {details.mobileNo}</li>
					</ul>
					
				</Col>
			</Row>
		</>

	)
}