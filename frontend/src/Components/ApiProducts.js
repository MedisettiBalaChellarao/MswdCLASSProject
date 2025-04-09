import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 

const ApiProducts = () => { 
  const [products, setProducts] = useState([]); 
 
  useEffect(() => { 
    const fetchData = async () => { 
      try { 
        const response = await axios.get('https://fakestoreapi.com/products'); 
        setProducts(response.data); 
      } catch (error) { 
        console.error("Error fetching data: ", error); 
      } 
    }; 
 
    fetchData(); 
  }, []); 
 
  return ( 
    <div> 
      <h1>Products</h1> 
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}> 
        {products.map(product => ( 
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}> 
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /> 
            <h3>{product.title}</h3> 
            <p>{product.description}</p> 
            <p>Price: ${product.price}</p> 
            
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
}; 
 
export default ApiProducts;