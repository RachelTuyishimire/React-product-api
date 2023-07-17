import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const Product =()=> {
  const [product, setProducts] = useState([]);
  
  useEffect(()=>{
    (async () =>{
      await getProducts();
    })();
    getProducts();
  }, [])

  const getProducts = async() => {
    try{
      const response = await fetch ('https://dummyjson.com/products')
      const result =await response.json();
      setProducts(result.products);

      // const response = await fetch('https://dummyjson.com/products')
      // const result = await response.json();
      // setProducts(result.product);
     

    }
    catch(error){
      console.log(error.message)
    }  
  };
  console.log({product});
  let navigate = useNavigate();
  
  
  return(
  
    <div className='product'>
      {product.map(item=>(
        <div className='content' key={item.id}>
          <img className='image' alt='' src={item.images[3]}/>
          <h3>{item.title}</h3>
          <h4>${item.price}</h4>
          <h4>{item.discountPercentage}</h4>
          <button  onClick={()=>{navigate(`/products/${item.id}`);}}> View More</button>
          <button className='btn' onClick={()=>{navigate('/addproduct');}}>Add Product</button>
          </div>
      ))}
     
   
      
  
    </div>)
  
};

export default Product
