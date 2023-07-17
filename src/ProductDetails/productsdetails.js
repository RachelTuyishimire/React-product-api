import { useParams, Link } from 'react-router-dom'
import React,{ useState, useEffect, useCallback} from 'react'
import './style.css'

const ProductDetails =()=> {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  


  const getProducts = useCallback(async() => {
    try{
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  } catch (error){
    console.log(error.message);
  }
 }, [id]);

  useEffect(()=> {
    getProducts()
  }, [getProducts]);
  
  return(
    <div>
    <h1>
      Product name:  {product.title} </h1>
      <div>
        <p>{product.description}</p>
        
        <span>{product.price}</span>
      </div>
      
      <Link to="/">
        <button>
          Go Back
        </button>  
      </Link>
    </div>
  );
};

export default ProductDetails

