import { Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

const Product =()=> {
  const [products, setProducts] = useState([])

  const getProducts = async() => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
  
    setProducts(data.products)
  
  }

  useEffect(()=> {
    getProducts()
  }, [])

   if (!Array.isArray(products)) {
    return <p>No products available.</p>;
  }

  
  return(
    <div>
    <h1>Product page 🛍️👝</h1>
      {products.map(product => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.discountPercentage}%</p>
            
          </Link>
        </div>)
      )}
      
      <Link to="/">
        <button>go back</button>  
      </Link>
    </div>
  )
}

export default Product