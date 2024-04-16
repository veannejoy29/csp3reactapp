import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import EditProduct from './EditProduct';
import ArchiveProduct from './ArchiveProduct';

export default function AdminView({ productsData, fetchData }) {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const productArr = productsData.map(product=> {
            return (
                <tr>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td className={product.isActive ? "text-success" : "text-danger"}>{product.isActive ? "Available" : "Unavailable"}</td>
                    <td><EditProduct product={product._id} fetchData={fetchData} /></td>
                    <td><ArchiveProduct product={product._id} isActive={product.isActive} fetchData={fetchData} /></td>
                </tr>

            )
        })

        setProducts(productArr);

    }, [productsData])

    return (
        <>
            <h1 className="text-center my-4">Admin Dashboard</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Availability</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </Table>
        </>
    )
}