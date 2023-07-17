import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const Product =()=> {
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    (async () =>{
      await getProducts();
    })();
    getProducts();
  }, [])

  const getProducts = async() => {
    try{
      const response = await fetch('https://dummyjson.com/products')
      const result = await response.json();
      setProducts(result.products);
     

    }
    catch(error){
      console.log(error.message)
    }  
  };
  console.log({products});
  let navigate = useNavigate();
  
  
  return(
    <div className='product'>
    <h1>All products</h1>
            {products.map(item=>(

                <div className='items' key={item.id}>
                  <img className='image' alt='' src = {item.imges[3]}/>
                    <h2>{item.title}</h2>
                    <p>Ksh{item.price}</p>
                    <p>{item.discountPercentage}%</p>
                   <button onClick = {() => {navigate (`/products/${item.id}`);}}>More</button>
                   <button className='btn' onClick= {()=>{
                    navigate("?addproduct");
                   }}>Add Product</button>
 
                    </div>
      ))}
      
     
    </div>
  )
}

export default Product
