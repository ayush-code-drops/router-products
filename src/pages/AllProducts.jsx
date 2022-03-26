import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledTable from "../components/StyledTable";
function AllProducts() {
  const [products, setProducts] = useState([]);
    const Table = styled.table`
width:800px;
margin:auto;
margin-top:30px;
    th,td{
        padding:5px;
   border:1px solid black
 }
    `
  useEffect(() => {
      axios.get("https://json-server-deploy-mock.herokuapp.com/products").then((res) => {
        console.log(res.data)
        setProducts(res.data);
      }).catch((err) => console.log(err));
  }, []);
    
    return (
      <StyledTable rows={products}/>
        // <Table>
        //     <thead>
        //         <tr>
        //             <th>Icon</th>
        //             <th>Product Name</th>
        //             <th>Product Price</th>
        //             <th>More Details</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //             products?.map((item) => {
        //                 return (
        //                     <tr key={item.id}>
        //                         <td><img src={item.image} alt="img" /></td>
        //                     <td>{item.name}</td>
        //                     <td>{item.price}</td>
        //                     <td><Link to={`/products/${item.id}`}>More Details</Link></td>
        //                     </tr>
        //                 )
        //             })
        //         }
        //     </tbody>
        // </Table>
    )
  
  
   
  
}

export default AllProducts;
