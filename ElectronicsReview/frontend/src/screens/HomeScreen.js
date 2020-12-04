import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props){

  const[products,setProduct]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      const {data}= await axios.get("/api/products");
      setProduct(data)
    }
    fetchData();
  })
  return <ul className="products">
  {
    products.map(product=>
    <li key={product._id}>
    <div className="product">
    <Link to={'/product/'+product._id}>
     <img className="product-image" src={product.image} alt="products"></img>
      </Link>
        <div className="product-name">
         <Link to={'/product/'+product._id}>{product.name}</Link>
      </div>
      </div>
      </li>) 
  }
    </ul>
}

export default HomeScreen;